import { h, Component } from 'preact';
import './StationSelector.css';

import CardLoading from '../../../components/CardLoading';

import RailService from '../../../services/RailService';
import QueryString from '../../../services/QueryString';
import PubSub from '../../../services/PubSub';
import Constants from '../../../services/Constants';
import GeoService from '../../../services/GeoService';

class StationSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stationsList: [],
            filterString: '',
            stationToChange: props.data.stationToChange
        };

        this.onSearch = this.onSearch.bind(this);
        this.onStationSelect = this.onStationSelect.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.escapeListener = this.escapeListener.bind(this);
        this.getStationsList = this.getStationsList.bind(this);
    }

    componentDidMount() {
        GeoService.getGeoPosition()
            .then((coords) => {
                this.getStationsList(`${coords.lat},${coords.lon}`);
            })
            .catch(() => {
                this.getStationsList();
            });

        window.addEventListener('keyup', this.escapeListener);
        document.getElementById('search').focus();
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.escapeListener);
    }

    onSearch(event) {
        this.setState({
            filterString: event.target.value
        });
    }

    onStationSelect(stationCode) {
        QueryString.addOrUpdateQueryString(this.state.stationToChange, stationCode);
        PubSub.publish(Constants.STATION_SELECT);
        this.closeModal();
    }

    getStationsList(coords) {
        RailService.getStationsList(coords)
            .then((response) => {
                this.setState({
                    stationsList: response.data
                });
            });
    }

    escapeListener(event) {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    }

    closeModal(event) {
        if (!event || event.target.id === 'modal') {
            PubSub.publish(Constants.STATION_SELECT_CLOSE);
        }
    }

    render() {
        const filtered = RailService.filterStationsList(this.state.filterString);
        const data = Object.keys(filtered).map(stationCode => ({
            code: stationCode,
            title: filtered[stationCode].title || filtered[stationCode]
        }));

        return (
            <div className="modal-container" onClick={this.closeModal} id="modal">
                <div className="modal">
                    <input
                        type="text"
                        className="search"
                        onKeyUp={this.onSearch}
                        id="search"
                        value={this.state.filterString}
                        placeholder="Search for a station"
                    />
                    {
                        !data.length &&
                        <div className="station">
                            <CardLoading />
                        </div>
                    }
                    {
                        !!data.length &&
                        <div className="stations">
                            {data.map(element => (
                                <div className="station" onClick={() => this.onStationSelect(element.code)}>
                                    {element.title}
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default StationSelector;
