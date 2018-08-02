import * as Mitt from 'mitt/dist/mitt.umd';
import { Emitter } from 'mitt';

const emitter = new Mitt() as Emitter;

// import Mitt from 'mitt';

// const emitter = new Mitt();

export default {
    subscribe: emitter.on,
    publish: emitter.emit
};
