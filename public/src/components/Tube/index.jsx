import { h, Component } from 'preact';
import './Tube.css';

import TubeService from '../../services/TubeService';
import Card from '../Card';
import CardHeader from '../CardHeader';
import CardTitle from '../CardTitle';
import CardLoading from '../CardLoading';
import CardInner from '../CardInner';
import TubeRow from '../TubeRow';

class Tube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tube: null
        }
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
