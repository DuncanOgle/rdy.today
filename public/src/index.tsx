import { h, render } from 'preact';
import '../styles/main.css';

import Weather from './views/Weather';
import Tube from './views/Tube';
import Rail from './views/Rail';
import Modal from './components/Modal';

const Root = () => (
    <div className="container">
        <Modal />
        <h1 className="title"><a href="/">Rdy.Today</a></h1>
        <Weather />
        <br />
        <Rail />
        <br />
        <Tube />
    </div>
);

render(<Root />, document.getElementById('main'), document.getElementById('main').lastChild as Element);
