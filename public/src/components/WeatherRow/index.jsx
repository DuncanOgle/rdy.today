import { h } from 'preact';
import './Weather.css';

const WeatherRow = (props) => {
    const row = props.row;
    const hourOfWeather = `${row.hour < 10 ? '0' : ''}${row.hour}:00 `;

    return (
        <p key={row.hour} className={`rain rain-${row.pop}`}>
            {hourOfWeather}
            - ☀️ {row.feelsLike}°
            / 💦 {row.pop}%
            / 💨 {row.windSpeed}mph
            / {row.condition}
        </p>
    );
};

export default WeatherRow;
