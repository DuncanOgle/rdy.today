import React from 'react';
import { render } from 'react-dom';
import styles from '../styles/main.css';
import Weather from './components/Weather/Weather';
import Tube from './components/Tube/Tube';
import Rail from './components/Rail/Rail';
import SectionAdder from './components/SectionAdder/SectionAdder';

function sortSections(sections) {
  return sections.sort((a, b) => {
    if (a.position < b.position) {
      return -1;
    }

    if (a.position > b.position) {
      return 1;
    }

    return 0;
  });
}

function renderSection(section) {
  if (section.type === 'rail') {
    return (<Rail key={`${section.type}-${section.position}`} data={section} />);
  }
  if (section.type === 'weather') {
    return (<Weather key={`${section.type}-${section.position}`} data={section} />);
  }
  if (section.type === 'tube') {
    return (<Tube key={`${section.type}-${section.position}`} data={section} />);
  }

  return (<div />);
}

function Root() {
  const sections = sortSections(JSON.parse(localStorage.getItem('rdy')).data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rdy.Today</h1>
      <SectionAdder />
      {sections.map(row => renderSection(row))}
    </div>
  );
}

render(<Root />, document.getElementById('main'));
