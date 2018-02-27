import { h } from 'preact';

const RailMessages = (props) => {
    if (!props.messages.length) {
        return null;
    }

    return (
        <div className={'rail'}>
            {props.messages.map(row => (
                <ul>
                    <li dangerouslySetInnerHTML={{ __html: row }} />
                </ul>
            ))}
        </div>
    );
};

export default RailMessages;
