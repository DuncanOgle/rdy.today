import { h } from 'preact';

const WeatherViewMore = (props: { isVisible?: boolean, onClick?: any }) => {
    const styling = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        display: ''
    };

    if (!props.isVisible) {
        styling.display = 'none';
    }

    return (
        <a href="" onClick={props.onClick} style={styling}>
            Further ahead &gt;
        </a>
    );
};

export default WeatherViewMore;
