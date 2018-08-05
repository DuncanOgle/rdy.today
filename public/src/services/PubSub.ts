import * as Mitt from 'mitt';
let emitter: mitt.Emitter = new Mitt();

// import Mitt from 'mitt';

// const emitter = new Mitt();

export default {
    subscribe: emitter.on,
    publish: emitter.emit
};
