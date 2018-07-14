import { h, Component } from 'preact';

import TubeService from '../../services/TubeService';
import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import CardTitle from '../../components/CardTitle';
import CardLoading from '../../components/CardLoading';
import CardInner from '../../components/CardInner';
import TubeRow from '../../components/TubeRow';

class Tube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tube: null
        };
    }

    componentDidMount() {
        TubeService.getTubeData()
            .then((response) => {
                this.setState({
                    tube: response.data
                });
            });
    }

    render() {
        const hasData = !!this.state.tube;

        return (
            <Card>
                <CardHeader>
                    <CardTitle>Tube</CardTitle>
                </CardHeader>
                {
                    !hasData &&
                    <CardLoading />
                }
                {
                    hasData &&
                    <CardInner>
                        {this.state.tube.map(row => <TubeRow row={row} />)}
                    </CardInner>
                }
            </Card>
        );
    }
}

export default Tube;