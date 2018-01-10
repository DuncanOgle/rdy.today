import React from 'react';
import styles from './Weather.css';
import globalStyles from '../../../styles/main.css';
import WeatherService from '../../services/WeatherService';
import GeoService from '../../services/GeoService';

class Weather extends React.Component {
  componentWillMount() {
    this.setState({
      weather: null,
      limit: 12,
    });
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
   * @param {String} coords
   */
  getWeatherData(coords) {
    WeatherService.getWeatherData(coords)
    .then((response) => {
      this.setState({
        weather: response.data,
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
      limit: 24,
    });
  }

  render() {
    const hasData = !!this.state.weather;
    let toRender = null;

    if (hasData) {
      toRender = (
        <div>
          <div className={globalStyles.card}>
            <div className={globalStyles.cardHeader}>
              <h2>Weather</h2>
              <a
                href=""
                className={this.state.limit === 24 ? globalStyles.hidden : styles['view-more']}
                onClick={event => this.increaseLimit(event)}
              >
              Further ahead &gt;
              </a>
            </div>
            <div className={styles.weather}>
              {this.state.weather.slice(0, this.state.limit).map(row => (
                <p key={row.hour} className={[styles.rain, styles[`rain-${row.pop}`]].join(' ')}>
                  {row.hour < 10 ? `0${row.hour}` : row.hour}:00
                  - ☀️ {row.feelsLike}°
                  / 💦 {row.pop}%
                  / 💨 {row.windSpeed}mph
                  / {row.condition}
                </p>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      toRender = (
        <div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Weather</h2>
            </div>
            Loading...
          </div>
        </div>
      );
    }

    return (toRender);
  }
}

export default Weather;
