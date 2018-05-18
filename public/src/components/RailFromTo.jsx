import { h } from 'preact';

const RailFromTo = (props) => {
    const from = props.data.fromName;
    const to = props.data.toName;

    return (
        <div>
            {from} &rarr;<br />
            {to}
        </div>
    );
};

export default RailFromTo;
