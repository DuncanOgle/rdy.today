import { h } from 'preact';

const WeatherRow = (props) => {
    const row = props.row;
    const hourOfWeather = `${row.hour < 10 ? '0' : ''}${row.hour}:00 `;
    const classes = ['rain', `rain-${row.pop}`];

    return (
        <p key={row.hour} className={classes.join(' ')}>
            {hourOfWeather}
            - ☀️ {row.feelsLike}°
            / 💦 {row.pop}%
            / 💨 {row.windSpeed}mph
            / {row.condition}
        </p>
    );
};

export default WeatherRow;
