interface ResultInterface {
    [index: string]: string,

    from?: string,
    to?: string
}

function parse(): ResultInterface {
    const data: ResultInterface = {};

    if (!window.location.search) {
        return data;
    }

    window.location.search
        .substring(1)
        .split('&')
        .forEach((element) => {
            const queryStringParameter: Array<string> = element.split('=');
            data[queryStringParameter[0]] = queryStringParameter[1];
        });

    return data;
}

function addOrUpdateQueryString(key: string, value: string) {
    const parsed: ResultInterface = parse();

    parsed[key] = value;

    const encoded = Object.entries(parsed).map(([k, v]) => `${k}=${v}`).join('&');
    window.history.pushState({ path: `?${encoded}` }, '', `?${encoded}`);
}

export default {
    parse,
    addOrUpdateQueryString
};
