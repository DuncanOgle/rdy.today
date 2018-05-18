import { h, Component } from 'preact';
import './Rail.css';

import RailService from '../../services/RailService';
import GeoService from '../../services/GeoService';
import RailMessages from '../RailMessages';
import Card from '../Card';
import CardHeader from '../CardHeader';
import CardTitle from '../CardTitle';
import CardLoading from '../CardLoading';
import RailFromTo from '../RailFromTo';
import CardInner from '../CardInner';
import RailRow from '../RailRow';
import QueryString from '../../services/QueryString';

class Rail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rail: null,
            limit: 6
        };
    }

    componentDidMount() {
        const overrides = QueryString.parse();

        const from = overrides.from || 'LEW';
        const to = overrides.to || 'CHX';

        GeoService.getGeoPosition()
            .then((coords) => {
                this.getRailData(from, to, `${coords.lat},${coords.lon}`);
            })
            .catch(() => {
                this.getRailData(from, to);
            });
    }

    getRailData(to, from, coords) {
        RailService.getRailData(to, from, coords)
            .then((data) => {
                this.setState({
                    rail: data.data
                });
            });
    }

    renderRailTimes() {
        const railRows = this.state.rail.times.slice(0, this.state.limit);
        return (
            <CardInner withPadding>
                {
                    railRows.map(row => <RailRow row={row} />)
                }
            </CardInner>
        );
    }

    render() {
        const hasData = !!this.state.rail;
        const shouldShowMessages = hasData && this.state.rail.messages.length > 0;

        return (
            <Card>
                <CardHeader>
                    <CardTitle>
                        {
                            hasData ? <RailFromTo data={this.state.rail.meta} /> : 'Rail'
                        }
                    </CardTitle>
                </CardHeader>
                {
                    !hasData &&
                    <CardLoading />
                }
                {
                    (hasData && shouldShowMessages) &&
                    <RailMessages messages={this.state.rail.messages} />
                }
                {
                    hasData &&
                    this.renderRailTimes()
                }
            </Card>
        );
    }
}

export default Rail;
