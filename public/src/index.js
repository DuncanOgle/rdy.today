import React from 'react';
import { render } from 'react-dom';
import styles from '../styles/main.css';

import Weather from './components/Weather/Weather';
import Tube from './components/Tube/Tube';
import Rail from './components/Rail/Rail';

function Root() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rdy.Today</h1>
      <Weather />
      <br />
      <Rail />
      <br />
      <Tube />
    </div>
  );
}

render(<Root />, document.getElementById('main'));
