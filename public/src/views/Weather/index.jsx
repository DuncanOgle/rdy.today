import { h, Component } from 'preact';
import './Weather.css';

import WeatherService from '../../services/WeatherService';
import GeoService from '../../services/GeoService';

import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import CardTitle from '../../components/CardTitle';
import CardLoading from '../../components/CardLoading';
import WeatherRow from '../../components/WeatherRow';
import CardInner from '../../components/CardInner';
import WeatherViewMore from '../../components/WeatherViewMore';

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
                <CardHeader style={{ position: 'relative' }}>
                    <CardTitle>Weather</CardTitle>
                    {
                        hasData &&
                        <WeatherViewMore onClick={this.increaseLimit} isVisible={shouldShowViewMore} />
                    }
                </CardHeader>
                {
                    hasData &&
                    <CardInner className="fade-out">
                        <div style={{ overflowX: 'scroll' }}>
                            {
                                weatherRows.map(row => <WeatherRow row={row} />)
                            }
                        </div>
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
