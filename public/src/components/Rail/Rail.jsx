import { h, Component } from 'preact';
import './Rail.css';

import RailService from '../../services/RailService';
import GeoService from '../../services/GeoService';
import RailMessages from '../RailMessages/RailMessages';

class Rail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rail: null,
            limit: 6,
        };
    }

    componentDidMount() {
        GeoService.getGeoPosition()
            .then((coords) => {
                this.getRailData('LEW', 'CHX', `${coords.lat},${coords.lon}`);
            })
            .catch(() => {
                this.getRailData('LEW', 'CHX');
            });
    }

    getRailData(to, from, coords) {
        RailService.getRailData(to, from, coords).then((data) => {
            this.setState({
                rail: data.data
            });
        });
    }

    getStatus(row) {
        return row.cancelReason ? 'Cancelled' : row.etd;
    }

    getStatusText(row) {
        let toReturn = '';

        if (row.cancelReason || row.delayReason) {
            toReturn = `<br><small>${row.cancelReason || row.delayReason}</small>`;
        }

        return toReturn;
    }

    renderRailTimes() {
        return (
            <div>
                <RailMessages messages={this.state.rail.messages} />
                <div class={'rail'}>
                    {this.state.rail.times.slice(0, this.state.limit).map(row => (
                        <p key={`${row.std}${row.etd}${row.platform}${row.from}${row.to}`}>
                            {row.std} ({this.getStatus(row)}) / Platform {row.platform || 'unknown'}
                            <span dangerouslySetInnerHTML={{ __html: this.getStatusText(row) }} />
                        </p>
                    ))}
                </div>
            </div>
        );
    }

    renderFromTo() {
        return (
            <div>
                {this.state.rail.meta.fromName} &rarr;<br /> {this.state.rail.meta.toName}
            </div>
        );
    }

    render() {
        const hasData = !!this.state.rail;

        return (
            <div>
                <div class={'card'}>
                    <div class={'cardHeader'}>
                        <h2>
                            {
                                !hasData &&
                                <div>Rail</div>
                            }
                            {
                                hasData &&
                                this.renderFromTo()
                            }
                        </h2>
                    </div>
                    {
                        !hasData &&
                        <div>Loading...</div>
                    }
                    {
                        hasData &&
                        this.renderRailTimes()
                    }
                </div>
            </div>
        );
    }
}

export default Rail;
