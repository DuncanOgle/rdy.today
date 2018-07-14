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
        this.toggleScrolling = this.toggleScrolling.bind(this);
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
            this.toggleScrolling();
        }

        this.setState({
            modals: newModals
        });
    }

    toggleScrolling() {
        const isOverflowHidden = document.getElementsByTagName('body')[0].style.overflow === 'hidden';

        if (isOverflowHidden) {
            document.getElementsByTagName('body')[0].style.overflow = '';
        } else {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }
    }

    render() {
        if (this.state.modals.length) {
            this.toggleScrolling();
        }

        return (
            <div>
                {this.state.modals}
            </div>
        );
    }
}

export default Modal;
