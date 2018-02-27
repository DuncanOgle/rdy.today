import { h, Component } from 'preact';
import './Tube.css';

import TubeService from '../../services/TubeService';

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
                    tube: response.data,
                });
            });
    }

    render() {
        const hasData = !!this.state.tube;
        let toRender = null;

        if (hasData) {
            toRender = (
                <div>
                    <div className={'card'}>
                        <div className={'cardHeader'}>
                            <h2>Tube</h2>
                        </div>
                        <div className={'tube'}>
                            {this.state.tube.map(row => (
                                <p key={row.line} className={['line', row.line].join(' ')}>
                                    {row.disruption}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            toRender = (
                <div>
                    <div className={'card'}>
                        <div className={'cardHeader'}>
                            <h2>Tube</h2>
                        </div>
                        Loading...
                    </div>
                </div>
            );
        }

        return (toRender);
    }
}

export default Tube;
