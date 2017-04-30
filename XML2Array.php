<?php
/**
 * Created by PhpStorm.
 * User: duncan
 * Date: 21/04/2015
 * Time: 09:48
 *
 *
 * *****************************************************************
 *
 * This is a class that will take an XML document, and converts it into an array
 * Its a lot better than simplexml_load_string as it can handle multiple tags of
 * the same name. It has also been designed to make all tags lowercase to help
 * reduce the chances for naming errors
 *
 * Its also a bit cleaner than Dusan's XmlParser, which was designed to read
 * large XML documents (500mb+) in less than 10mb of memory - Don't really
 * need to worry about that with TJP2...
 *
 * https://github.com/openlss/lib-array2xml
 *
 * *****************************************************************
 *
 */

/**
 *
 *
 *
 * NOTE
 *
 * This class has been modified in the following ways:
 *------------------------------------------------------------------
 *
 * All field names are lowercase - this makes it easier to work with
 *
 * -----------------------------------------------------------------
 *
 * Attributes are now no longer grouped with underscores _
 *
 * Before
 *
 * '_attributes' => [
 *      'attribute' => 1
 * ],
 * '_value' => 'value'
 *
 * After
 *
 * 'attribute' => 1,
 * 'value' => 'value
 *
 * -----------------------------------------------------------------
 *
 * Also, XML sucks major balls
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * XML2Array: A class to convert XML to array in PHP
 * It returns the array which can be converted back to XML using the Array2XML script
 * It takes an XML string or a DOMDocument object as an input.
 *
 * See Array2XML: http://www.lalit.org/lab/convert-php-array-to-xml-with-attributes
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/convert-xml-to-array-in-php-xml2array
 * License: Apache License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.1 (07 Dec 2011)
 * Version: 0.2 (04 Mar 2012)
 *            Fixed typo 'DomDocument' to 'DOMDocument'
 *
 * Usage:
 *       $array = XML2Array::createArray($xml);
 */
class XML2Array
{

    private static $xml = null;
    private static $encoding = 'UTF-8';

    /**
     * Initialize the root XML node [optional]
     *
     * @param $version
     * @param $encoding
     * @param $format_output
     */
    public static function init($version = '1.0', $encoding = 'UTF-8', $format_output = true) {
        self::$xml = new DOMDocument($version, $encoding);
        self::$xml->formatOutput = $format_output;
        self::$encoding = $encoding;
    }

    /**
     * Convert an XML to Array
     *
     * @param $input_xml
     *
     * @return DOMDocument
     * @throws Exception
     * internal param string $node_name - name of the root node to be converted
     * internal param array $arr - array to be converted
     *
     */
    public static function &createArray($input_xml) {
        $xml = self::getXMLRoot();
        if (is_string($input_xml)) {
            $parsed = @$xml->loadXML($input_xml);
            if (!$parsed) {
                throw new Exception('[XML2Array] Error parsing the XML string.');
            }
        } else {
            if (get_class($input_xml) != 'DOMDocument') {
                throw new Exception('[XML2Array] The input XML object should be of type: DOMDocument.');
            }
            $xml = self::$xml = $input_xml;
        }
        $array[$xml->documentElement->tagName] = self::convert($xml->documentElement);
        self::$xml = null;    // clear the xml node in the class for 2nd time use.
        return $array;
    }

    /**
     * Convert an Array to XML
     *
     * @param mixed $node - XML as a string or as an object of DOMDocument
     *
     * @return mixed
     */
    private static function &convert($node) {
        $output = [];

        switch ($node->nodeType) {
            case XML_CDATA_SECTION_NODE:
                $output['@cdata'] = trim($node->textContent);
                break;

            case XML_TEXT_NODE:
                $output = trim($node->textContent);
                break;

            case XML_ELEMENT_NODE:

                // for each child node, call the covert function recursively
                for ($i = 0, $m = $node->childNodes->length; $i < $m; $i++) {
                    $child = $node->childNodes->item($i);
                    $v = self::convert($child);
                    if (isset($child->tagName)) {
                        $t = ($child->tagName);

                        // assume more nodes of same kind are coming
                        if (!isset($output[$t])) {
                            $output[$t] = [];
                        }
                        $output[$t][] = $v;
                    } else {
                        //check if it is not an empty text node
                        if ($v !== '') {
                            $output = $v;
                        }
                    }
                }

                if (is_array($output)) {
                    // if only one node of its kind, assign it directly instead if array($value);
                    foreach ($output as $t => $v) {
                        if (is_array($v) && count($v) == 1) {
                            $output[$t] = $v[0];
                        }
                    }
                    if (empty($output)) {
                        //for empty nodes
                        $output = '';
                    }
                }

                // loop through the attributes and collect them
                if ($node->attributes->length) {
                    $a = [];
                    foreach ($node->attributes as $attrName => $attrNode) {
                        $a[$attrName] = (string)$attrNode->value;
                    }
                    // if its an leaf node, store the value in @value instead of directly storing it.
                    if (!is_array($output)) {
                        $output = ['value' => $output];
                    }
                    $output = array_merge($output, $a);
                }
                break;
        }

        return $output;
    }

    /*
     * Get the root XML node, if there isn't one, create it.
     */
    private static function getXMLRoot() {
        if (empty(self::$xml)) {
            self::init();
        }

        return self::$xml;
    }
}