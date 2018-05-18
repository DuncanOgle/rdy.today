import { h } from 'preact';

const styling = {
    background: '#EFF2F7',
    padding: '10px',
    color: '#3C4858',
    borderRadius: '10px',
    marginBottom: '10px'
};

const Card = props => (
    <div style={styling}>
        {props.children}
    </div>
);

export default Card;
