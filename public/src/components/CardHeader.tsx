import { h } from 'preact';

const styling = {
    marginBottom: '10px'
};

const CardHeader = (props: { children?: any, style?: {} }) => (
    <div style={Object.assign(styling, props.style)}>
        {props.children}
    </div>
);

export default CardHeader;
