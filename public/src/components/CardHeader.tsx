import { h } from 'preact';

import { StyleInterface } from '../types';

const styling = {
    marginBottom: '10px'
};

const CardHeader = (props: { children?: any, style?: StyleInterface }) => (
    <div style={Object.assign(styling, props.style)}>
        {props.children}
    </div>
);

export default CardHeader;
