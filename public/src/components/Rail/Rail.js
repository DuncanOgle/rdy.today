import React from 'react';
import styles from './Rail.css';
import RailService from '../../services/RailService';
import GeoService from '../../services/GeoService';

class Rail extends React.Component {
  componentWillMount() {
    this.setState({
      rail: null,
    });
  }

  componentDidMount() {
    GeoService.getGeoPosition()
    .then((coords) => {
      this.getRailData('LEW', 'LBG', `${coords.lat},${coords.lon}`);
    })
    .catch(() => {
      this.getRailData('LEW', 'LBG');
    });
  }

  getRailData(to, from, coords) {
    RailService.getRailData(to, from, coords).then((data) => {
      this.setState({
        rail: data.data,
      });
    });
  }

  render() {
    const hasData = !!this.state.rail;
    let toRender = null;

    if (hasData) {
      toRender = (
        <div>
          <h2>Rail</h2>
          <ul>
            {this.state.rail.messages.map(row => (
              <li dangerouslySetInnerHTML={{ __html: row }} />
            ))}
          </ul>
          <div className={styles.rail}>
            {this.state.rail.times.map(row => (
              <p key={`${row.std}${row.etd}${row.platform}${row.from}${row.to}`}>
                {row.std} ({row.etd}) / Platform {row.platform || 'unknown'}
              </p>
            ))}
          </div>
        </div>
      );
    } else {
      toRender = (
        <div className={styles.rail}>
          <h2>Rail</h2>
          Loading...
        </div>
      );
    }

    return (toRender);
  }
}

export default Rail;
