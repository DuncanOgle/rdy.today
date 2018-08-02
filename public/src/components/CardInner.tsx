import { h } from 'preact';

const CardInner = (props) => {
    const styling = Object.assign(props.style || {}, {
        borderRadius: '10px',
        background: '#E5E9F2',
        position: 'relative'
    });

    if (props.withPadding) {
        styling.padding = '10px';
    }

    return (
        <div style={styling} className={props.className}>
            {props.children}
        </div>
    );
};

export default CardInner;
