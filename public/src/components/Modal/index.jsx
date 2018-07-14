import { h, Component } from 'preact';

import StationSelector from './StationSelector';

import PubSub from '../../services/PubSub';
import Constants from '../../services/Constants';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modals: []
        };

        this.removeModal = this.removeModal.bind(this);
        this.lockScrolling = this.lockScrolling.bind(this);
        this.unlockScrolling = this.unlockScrolling.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe(Constants.STATION_SELECT_OPEN, (data) => {
            const newModals = this.state.modals;
            newModals.push(<StationSelector key="stationSelector" data={data} />);
            this.setState({
                modals: newModals
            });
        });
        PubSub.subscribe(Constants.STATION_SELECT, () => this.removeModal('stationSelector'));
        PubSub.subscribe(Constants.STATION_SELECT_CLOSE, () => this.removeModal('stationSelector'));
    }

    removeModal(modalKey) {
        const newModals = this.state.modals.filter(element => element.key !== modalKey);

        if (!newModals.length) {
            this.unlockScrolling();
        }

        this.setState({
            modals: newModals
        });
    }

    lockScrolling() {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }

    unlockScrolling() {
        document.getElementsByTagName('body')[0].style.overflow = '';
    }

    render() {
        if (this.state.modals.length) {
            this.lockScrolling();
        }

        return (
            <div>
                {this.state.modals}
            </div>
        );
    }
}

export default Modal;
