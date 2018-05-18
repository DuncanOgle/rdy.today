import { h } from 'preact';

const styling = {
    position: 'relative',
    marginBottom: '10px'
};

const CardHeader = (props) => {
    return (
        <div style={styling}>
            {props.children}
        </div>
    );
};

export default CardHeader;
