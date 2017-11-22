import React from 'react';
import styles from '../../../styles/main.css';
import RailService from '../../services/RailService';
import TokenSelect from '../TokenSelect/TokenSelect';
import AdderService from '../../services/AdderService';

function tokenSelected(type, element) {
  RailService.getLastSearch()
  .then((result) => {
    const xxx = result.data.filter(item => item.title === element);
    AdderService.setData('type', 'rail');
    AdderService.setData(type, xxx[0].key);
  });
}

function toTokenSelected(element) {
  tokenSelected('to', element);
}

function fromTokenSelected(element) {
  tokenSelected('from', element);
}

function SectionAdder() {
  return (
    <div>
      <h2>Add section</h2>
      <div>
        <input className={styles.sectionSelect} id="weather" hidden type="radio" name="sectionType" value="weather" />
        <label htmlFor="weather" className={styles.sectionSelectLabel}>
          Weather
        </label>
        <input className={styles.sectionSelect} id="tube" hidden type="radio" name="sectionType" value="tube" />
        <label htmlFor="tube" className={styles.sectionSelectLabel}>
          Tube
        </label>
        <input className={styles.sectionSelect} id="rail" hidden type="radio" name="sectionType" value="rail" />
        <label htmlFor="rail" className={styles.sectionSelectLabel}>
          Rail
        </label>
        <div>
          <input className={styles.input} type="text" placeholder="Default weather location" />
          <label className={styles.checkbox} htmlFor="weatherLocation">
            <input id="weatherLocation" type="checkbox" />
            <span className={styles.controlIndicator} />
            Try my location if available
          </label>
        </div>
        <div>
          <TokenSelect id={'from'} placeholder={'Station going from'} onChange={fromTokenSelected} />
          <TokenSelect id={'to'} placeholder={'Station going to'} onChange={toTokenSelected} />
          <label className={styles.checkbox} htmlFor="railLocation">
            <input id="railLocation" type="checkbox" />
            <span className={styles.controlIndicator} />
            Try my location if available
          </label>
        </div>
        <a href="#" className={styles.button}>Add</a>
      </div>
    </div>
  );
}

export default SectionAdder;
