import { h } from 'preact';

const styling = {
    fontWeight: 700,
    color: '#3C4858'
};

const CardTitle = (props: { children?: any }) => (
    <h2 style={styling}>
        {props.children}
    </h2>
);

export default CardTitle;
