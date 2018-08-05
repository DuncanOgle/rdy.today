import { h, Component } from 'preact';

import RailService, { RailRowInterface } from '../../services/RailService';
import GeoService from '../../services/GeoService';
import QueryString from '../../services/QueryString';

import RailMessages from '../../components/RailMessages';
import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import CardTitle from '../../components/CardTitle';
import CardLoading from '../../components/CardLoading';
import RailFromTo from '../../components/RailFromTo';
import CardInner from '../../components/CardInner';
import RailRow from '../../components/RailRow';
import PubSub from '../../services/PubSub';
import Constants from '../../services/Constants';

import { MetaDataInterface } from '../../components/RailFromTo';

interface Props {
}

interface State {
    rail: {
        times: Array<RailRowInterface>,
        messages: Array<string>,
        meta: MetaDataInterface
    },
    limit: number
}

class Rail extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            rail: null,
            limit: 6
        };

        this.getGeoRailData = this.getGeoRailData.bind(this);
        this.getRailData = this.getRailData.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe(Constants.STATION_SELECT, this.getGeoRailData);
        this.getGeoRailData();
    }

    getGeoRailData() {
        const overrides = QueryString.parse();

        const from = overrides.from || 'LEW';
        const to = overrides.to || 'CHX';

        if (overrides.from && overrides.to) {
            this.getRailData(from, to, undefined);
        } else {
            GeoService.getGeoPosition()
                .then((coords) => {
                    this.getRailData(from, to, `${coords.lat},${coords.lon}`);
                })
                .catch(() => {
                    this.getRailData(from, to, undefined);
                });
        }
    }

    getRailData(to: string, from: string, coords: string) {
        this.setState({
            rail: null
        });

        RailService.getRailData(to, from, coords)
            .then((data) => {
                this.setState({
                    rail: data.data
                });
            });
    }

    renderRailTimes() {
        const railRows = this.state.rail.times.slice(0, this.state.limit);
        const hasItems = !!railRows.length;

        return (
            <CardInner withPadding>
                {
                    !hasItems &&
                    <div>No trains found for this journey</div>
                }
                {
                    railRows.map(row => <RailRow row={row} />)
                }
            </CardInner>
        );
    }

    render() {
        const hasData = !!this.state.rail;
        const shouldShowMessages = hasData && this.state.rail.messages.length > 0;
        const metadata = this.state.rail && this.state.rail.meta;

        return (
            <Card>
                <CardHeader>
                    <CardTitle>
                        {!hasData && 'Rail'}
                        {
                            hasData &&
                            <RailFromTo data={metadata} />
                        }
                    </CardTitle>
                </CardHeader>
                {!hasData && <CardLoading />}
                {
                    (hasData && shouldShowMessages) &&
                    <RailMessages messages={this.state.rail.messages} />
                }
                {hasData && this.renderRailTimes()}
            </Card>
        );
    }
}

export default Rail;
