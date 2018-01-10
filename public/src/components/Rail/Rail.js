import React from 'react';
import styles from './Rail.css';
import globalStyles from '../../../styles/main.css';
import RailService from '../../services/RailService';
import GeoService from '../../services/GeoService';
import RailMessages from '../RailMessages/RailMessages';

class Rail extends React.Component {
  componentWillMount() {
    this.setState({
      rail: null,
      limit: 6,
    });
  }

  componentDidMount() {
    GeoService.getGeoPosition()
    .then((coords) => {
      this.getRailData('LEW', 'CHX', `${coords.lat},${coords.lon}`);
    })
    .catch(() => {
      this.getRailData('LEW', 'CHX');
    });
  }

  getRailData(to, from, coords) {
    RailService.getRailData(to, from, coords).then((data) => {
      this.setState({
        rail: data.data
      });
    });
  }

  getStatus(row) {
    return row.cancelReason ? 'Cancelled' : row.etd;
  }

  getStatusText(row) {
    let toReturn = '';

    if (row.cancelReason || row.delayReason) {
      toReturn = `<br><small>${row.cancelReason || row.delayReason}</small>`;
    }

    return toReturn;
  }

  render() {
    const hasData = !!this.state.rail;
    let toRender = null;

    if (hasData) {
      toRender = (
        <div>
          <div className={globalStyles.card}>
            <div className={globalStyles.cardHeader}>
              <h2>{this.state.rail.meta.fromName} &rarr;<br /> {this.state.rail.meta.toName}</h2>
            </div>
            <RailMessages messages={this.state.rail.messages} />
            <div className={styles.rail}>
              {this.state.rail.times.slice(0, this.state.limit).map(row => (
                <p key={`${row.std}${row.etd}${row.platform}${row.from}${row.to}`}>
                  {row.std} ({this.getStatus(row)}) / Platform {row.platform || 'unknown'}
                  <span dangerouslySetInnerHTML={{ __html: this.getStatusText(row) }} />
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
              <h2>Rail</h2>
            </div>
            Loading...
          </div>
        </div>
      );
    }

    return (toRender);
  }
}

export default Rail;
