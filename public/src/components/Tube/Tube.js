import React from 'react';
import styles from './Tube.css';
import TubeService from '../../services/TubeService';

class Tube extends React.Component {
  componentWillMount() {
    this.setState({
      tube: null,
    });
  }

  componentDidMount() {
    TubeService.getTubeData()
    .then((response) => {
      this.setState({
        tube: response.data,
      });
    });
  }

  render() {
    const hasData = !!this.state.tube;
    let toRender = null;

    if (hasData) {
      toRender = (
        <div>
          <h2>Tube</h2>
          <div className={styles.tube}>
            {this.state.tube.map(row => (
              <p key={row.line} className={[styles.line, styles[row.line]].join(' ')}>
                {row.disruption}
              </p>
            ))}
          </div>
        </div>
      );
    } else {
      toRender = (
        <div>
          <h2>Tube</h2>
          <div>
            Loading...
          </div>
        </div>
      );
    }

    return (toRender);
  }
}

export default Tube;
