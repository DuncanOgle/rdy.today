import {h} from 'preact';
import './Tube.css';

import {TubeRowInterface} from '../../services/TubeService';

interface Props {
    row: TubeRowInterface
}

const WeatherRow = (props: Props) => {
    const row = props.row;

    return (
        <p key={row.line} className={`line ${row.line}`}>
            {row.disruption}
        </p>
    );
};

export default WeatherRow;
