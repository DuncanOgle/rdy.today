import { h, render } from 'preact';
import '../styles/main.css';

import Weather from './components/Weather';
import Tube from './components/Tube';
import Rail from './components/Rail';

const Root = () => (
    <div className={'container'}>
        <h1 className={'title'}>Rdy.Today</h1>
        <Weather />
        <br />
        <Rail />
        <br />
        <Tube />
    </div>
);

render(<Root />, document.getElementById('main'), document.getElementById('main').lastChild);
