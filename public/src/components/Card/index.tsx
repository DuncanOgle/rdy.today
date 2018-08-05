import { h } from 'preact';
import './Card.css';

const Card = (props: { children?: any }) => (
    <div className="card">
        {props.children}
    </div>
);

export default Card;
