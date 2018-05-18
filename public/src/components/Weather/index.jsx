import { h, Component } from 'preact';
import './Weather.css';

import WeatherService from '../../services/WeatherService';
import GeoService from '../../services/GeoService';

import Card from '../Card';
import CardHeader from '../CardHeader';
import CardTitle from '../CardTitle';
import CardLoading from '../CardLoading';
import WeatherRow from '../WeatherRow';
import CardInner from '../CardInner';
import WeatherViewMore from '../WeatherViewMore';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: null,
            limit: 12
        };

        this.increaseLimit = this.increaseLimit.bind(this);
    }

    componentDidMount() {
        GeoService.getGeoPosition()
            .then((coords) => {
                this.getWeatherData(`${coords.lat},${coords.lon}`);
            })
            .catch(() => {
                this.getWeatherData();
            });
    }

    /**
     * getWeatherData
     * @param {String} [coords]
     */
    getWeatherData(coords) {
        WeatherService.getWeatherData(coords)
            .then((response) => {
                this.setState({
                    weather: response.data
                });
            });
    }

    /**
     * increaseLimit
     * @param {Event} event
     */
    increaseLimit(event) {
        event.preventDefault();

        this.setState({
            limit: 24
        });
    }

    render() {
        const hasData = !!this.state.weather;
        const shouldShowViewMore = this.state.limit !== 24;
        const weatherRows = hasData && this.state.weather.slice(0, this.state.limit);

        return (
            <Card>
                <CardHeader>
                    <CardTitle>Weather</CardTitle>
                    {
                        hasData &&
                        <WeatherViewMore onClick={this.increaseLimit} isVisible={shouldShowViewMore} />
                    }
                </CardHeader>
                {
                    hasData &&
                    <CardInner>
                        {
                            weatherRows.map(row => <WeatherRow row={row} />)
                        }
                    </CardInner>
                }
                {
                    !hasData &&
                    <CardLoading />
                }
            </Card>
        );
    }
}

export default Weather;
