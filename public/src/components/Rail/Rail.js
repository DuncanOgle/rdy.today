import React from 'react';
import styles from './Rail.css';
import RailService from '../../services/RailService';
import GeoService from '../../services/GeoService';

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
        latestTrain: this.getNextAvailableTrain(data.data.times),
      });
    });
  }

  /**
   * Determine time to display
   * @param {Object} trainTimes
   */
  getNextAvailableTrain(trainTimes) {
    const toReturn = {
      time: '',
      issue: '',
      platform: '',
    };

    const availableTrains = trainTimes.filter(element => !element.cancelReason);

    if (availableTrains[0].etd !== 'On time') {
      toReturn.time = availableTrains[0].etd;
    } else {
      toReturn.time = availableTrains[0].std;
    }

    if (availableTrains[0].delayReason || availableTrains[0].etd !== 'On time') {
      toReturn.issue = availableTrains[0].delayReason || 'Running late';
    }

    if (availableTrains[0].platform) {
      toReturn.platform += availableTrains[0].platform;
    } else {
      toReturn.platform += '?';
    }

    return toReturn;
  }

  render() {
    const hasData = !!this.state.rail;
    let toRender = null;

    if (hasData) {
      toRender = (
        <div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>{this.state.rail.meta.fromName}</h2>
              <h2>{this.state.rail.meta.toName}</h2>
              <h3 className={styles.nextTrain}>
                {this.state.latestTrain.time} ({this.state.latestTrain.platform})
              </h3>
              <a href="#" className={styles.viewMore}>{this.state.latestTrain.issue}</a>
            </div>
            <div className={styles.rail}>
              {this.state.rail.messages.map(row => (
                <ul><li dangerouslySetInnerHTML={{ __html: row }} /></ul>
              ))}
            </div>
            <div className={styles.rail}>
              {this.state.rail.times.slice(0, this.state.limit).map(row => (
                <p key={`${row.std}${row.etd}${row.platform}${row.from}${row.to}`}>
                  {row.std} ({row.etd}) / Platform {row.platform || 'unknown'}
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
