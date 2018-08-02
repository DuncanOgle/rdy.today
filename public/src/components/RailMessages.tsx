import { h } from 'preact';
import CardInner from './CardInner';

const styling = {
    marginBottom: '10px'
};

const RailMessages = (props) => {
    if (!props.messages.length) {
        return null;
    }

    return (
        <CardInner style={styling} withPadding>
            {props.messages.map(row => (
                <ul>
                    <li dangerouslySetInnerHTML={{ __html: row }} />
                </ul>
            ))}
        </CardInner>
    );
};

export default RailMessages;
