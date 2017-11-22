import React from 'react';
// import PropTypes from 'prop-types';
import Downshift from 'downshift';
import RailService from '../../services/RailService';
import globalStyles from '../../../styles/main.css';
// import styles from './TokenSelect.css';

class StationAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <Downshift
        onChange={this.props.onChange}
      >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
        }) => (
          <div>
            <input
              className={globalStyles.input}
              placeholder={this.props.placeholder}
              {...getInputProps({
                onChange: (event) => {
                  // would probably be a good idea to debounce this
                  // 😅
                  const value = event.target.value;
                  if (!value) {
                    return;
                  }
                  RailService
                    .getRailStations(value)
                    .then((response) => {
                      const items = response.data.map(
                        item => (item.title),
                      );

                      this.setState({ items });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                },
              })}
            />
            {isOpen && (
              <div className={globalStyles.results}>
                {this.state.items.map((item, index) => (
                  <div
                    className={
                      highlightedIndex === index ? globalStyles.resultHover : (selectedItem === item ? globalStyles.resultSelected : globalStyles.result)
                    }
                    key={item}
                    {...getItemProps({
                      item,
                    })}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          )}
      </Downshift>
    );
  }
}

export default StationAutocomplete;
