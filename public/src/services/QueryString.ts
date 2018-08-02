interface ResultInterface {
    from?: string,
    to?: string
}

function parse(): ResultInterface {
    const data = {};

    if (!window.location.search) {
        return data;
    }

    window.location.search
        .substring(1)
        .split('&')
        .forEach((element) => {
            const queryStringParameter = element.split('=');
            data[queryStringParameter[0]] = queryStringParameter[1];
        });

    return data;
}

function addOrUpdateQueryString(key, value) {
    const parsed = parse();

    parsed[key] = value;

    const encoded = Object.entries(parsed).map(([k, v]) => `${k}=${v}`).join('&');
    window.history.pushState({ path: `?${encoded}` }, '', `?${encoded}`);
}

export default {
    parse,
    addOrUpdateQueryString
};
