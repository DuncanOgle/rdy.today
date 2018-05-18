/**
 * Created by duncanogle on 29/06/2017.
 */

function parse() {
    const data = {};

    if (!window.location.search) {
        return data;
    }

    window.location.search
        .substring(1)
        .split('&')
        .forEach((element) => {
            const queryStringParameter = element.split('=');
            data[queryStringParameter[0]] = queryStringParameter[1];
        });

    return data;
}

export default {
    parse
};
