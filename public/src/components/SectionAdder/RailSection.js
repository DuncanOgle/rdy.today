import React from 'react';
import PropTypes from 'prop-types';
import styles from './../Rail/Rail.css';

class RailMessages extends React.Component {
  render() {
    let toRender = null;

    if (this.props.messages.length) {
      toRender = (
        <div className={styles.rail}>
          {this.props.messages.map(row => (
            <ul><li dangerouslySetInnerHTML={{ __html: row }} /></ul>
          ))}
        </div>
      );
    }

    return (toRender);
  }
}

RailMessages.propTypes = {
  messages: PropTypes.array,
};

RailMessages.defaultProps = {
  messages: PropTypes.array,
};

export default RailMessages;
