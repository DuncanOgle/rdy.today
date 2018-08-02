import { h, Component } from 'preact';
import Constants from '../../services/Constants';
import PubSub from '../../services/PubSub';
import QueryString from '../../services/QueryString';

import './RailFromTo.css';

export interface MetaDataInterface {
    fromName: string,
    toName: string,
    from: string,
    to: string
}

export interface Props {
    data: MetaDataInterface
}

interface State {
    from: string,
    to: string
}

class RailFromTo extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            from: props.data.fromName,
            to: props.data.toName
        };

        this.showStationSelector = this.showStationSelector.bind(this);
        this.switchDirection = this.switchDirection.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            from: nextProps.data.fromName,
            to: nextProps.data.toName
        });
    }

    showStationSelector(station) {
        PubSub.publish(Constants.STATION_SELECT_OPEN, { stationToChange: station });
    }

    switchDirection() {
        QueryString.addOrUpdateQueryString('from', this.props.data.to);
        QueryString.addOrUpdateQueryString('to', this.props.data.from);

        PubSub.publish(Constants.STATION_SELECT);
    }

    render() {
        return (
            <div>
                <span className="selector" onClick={() => this.showStationSelector('from')}>
                    {this.state.from}
                </span>
                <span onClick={this.switchDirection}> &rarr; </span>
                <span className="selector" onClick={() => this.showStationSelector('to')}>
                    {this.state.to}
                </span>
            </div>
        );
    }
}

export default RailFromTo;
