import { h } from 'preact';
import './Weather.css';

import { WeatherRowInterface } from '../../services/WeatherService';

interface Props {
    row: WeatherRowInterface
}

const WeatherRow = (props: Props) => {
    const row = props.row;
    const hourOfWeather = `${row.hour < 10 ? '0' : ''}${row.hour}:00 `;

    return (
        <p key={hourOfWeather} className={`rain rain-${row.pop}`}>
            {hourOfWeather}
            - ☀️ {row.feelsLike}°
            / 💦 {row.pop}%
            / 💨 {row.windSpeed}mph
            / {row.condition}
        </p>
    );
};

export default WeatherRow;
