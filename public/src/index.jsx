import { h, render } from 'preact';

import '../styles/main.css';

import Weather from './views/Weather';
import Tube from './views/Tube';
import Rail from './views/Rail';
import Modal from './components/Modal';

import PubSub from './services/PubSub';
import Constants from './services/Constants';

const Root = () => (
    <div className="container">
        <Modal />
        <div className="title" onClick={() => PubSub.publish(Constants.REFRESH)}>Rdy.Today</div>
        <Weather />
        <br />
        <Rail />
        <br />
        <Tube />
    </div>
);

render(<Root />, document.getElementById('main'), document.getElementById('main').lastChild);
