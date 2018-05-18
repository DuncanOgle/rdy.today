import { h } from 'preact';

const WeatherRow = (props) => {
    const row = props.row;
    const classes = ['line', row.line];

    return (
        <p key={row.line} className={classes.join(' ')}>
            {row.disruption}
        </p>
    );
};

export default WeatherRow;
