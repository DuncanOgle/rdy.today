import { h } from 'preact';

const CardInner = (props) => {
    const styling = Object.assign(props.style || {}, {
        borderRadius: '10px',
        background: '#E5E9F2'
    });

    if (props.withPadding) {
        styling.padding = '10px';
    }

    return (
        <div style={styling}>
            {props.children}
        </div>
    );
};

export default CardInner;
