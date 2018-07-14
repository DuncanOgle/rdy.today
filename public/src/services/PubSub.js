import Mitt from 'mitt';

const emitter = Mitt();

export default {
    subscribe: emitter.on,
    publish: emitter.emit
};
