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
    const data = this.props.data;

    if (data.tryLocation) {
      GeoService.getGeoPosition()
      .then((coords) => {
        this.getRailData(data.from, data.to, `${coords.lat},${coords.lon}`);
      })
      .catch(() => {
        this.getRailData(data.from, data.to);
      });
    } else {
      this.getRailData(data.from, data.to);
    }
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
              <h2>{this.state.rail.meta.fromName}</h2>
              <h2>{this.state.rail.meta.toName}</h2>
              <h3 className={styles.nextTrain}>
                {this.state.latestTrain.time} ({this.state.latestTrain.platform})
              </h3>
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
          <div className={globalStyles.card}>
            <div className={globalStyles.cardHeader}>
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
