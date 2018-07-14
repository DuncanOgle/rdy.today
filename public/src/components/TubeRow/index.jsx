import { h } from 'preact';
import './Tube.css';

const WeatherRow = (props) => {
    const row = props.row;

    return (
        <p key={row.line} className={`line ${row.line}`}>
            {row.disruption}
        </p>
    );
};

export default WeatherRow;
