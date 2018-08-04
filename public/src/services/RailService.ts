import {MetaDataInterface} from '../components/RailFromTo';

export interface RailResultInterface {
    data: {
        times: Array<string>,
        messages: Array<string>,
        meta: MetaDataInterface
    }
}

export interface RailRowInterface {
    cancelReason: string,
    etd: string,
    delayReason: string,
    std: string,
    platform: string,
    from: string,
    to: string
}

interface StationResultInterface {
    data: Array<StationRowInterface>
}

export interface StationRowInterface {
    [index: string]: string,

    title?: string
}

interface ScoredObjectInterface {
    [index: string]: string,

    value?: string,
    score?: string
}

let STATIONS: { [index: string]: string } = {};

function getRailData(from = 'LEW', to = 'CHX', coords = ''): Promise<RailResultInterface> {
    const newCoords = coords ? `/${coords}` : '';

    return new Promise((resolve, reject) => {
        fetch(`/api/rail/${from}/${to}${newCoords}`)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(reject);
    });
}

function getStationsList(coords = ''): Promise<any> {
    const newCoords = coords ? `/${coords}` : '';

    return new Promise((resolve, reject) => {
        if (!!Object.keys(STATIONS).length) {
            return resolve({data: STATIONS});
        }

        return fetch(`/api/rail/stations${newCoords}`)
            .then(response => response.json())
            .then((response) => {
                STATIONS = response.data;
                resolve(response);
            })
            .catch(reject);
    });
}

function filterStationsList(filterString: string) {
    if (filterString === '' || filterString.length < 2) {
        return STATIONS;
    }

    const foundEntries: ScoredObjectInterface = {};

    Object.keys(STATIONS)
        .map((key: string) => ({key, value: STATIONS[key]}))
        .forEach((element: { key: string, value: string }) => {
            if (!foundEntries[element.key]) {
                foundEntries[element.key] = {
                    value: element.value,
                    score: 0
                };
            }

            foundEntries[element.key].score += determineScore(element, filterString);
        });

    const newee = Object.keys(foundEntries).map(elem => ({
        key: elem,
        value: foundEntries[elem].value,
        score: foundEntries[elem].score,
    }));

    const toReturn = {};
    newee
        .filter(element => !!element.score)
        .sort(sortFunction)
        .forEach((element) => {
            toReturn[element.key] = element.value;
        });

    return toReturn;
}

function determineScore(element: { key: string, value: string }, filterString: string) {
    const searchString: string = filterString.toLowerCase();
    const value: string = element.value.toLowerCase();

    if (element.key.toLowerCase().includes(searchString)) {
        return 5;
    }

    if (value === searchString) {
        return 2.5;
    }

    if (value.startsWith(searchString)) {
        return 1.5;
    }

    if (value.includes(searchString)) {
        return 1;
    }
}

function sortFunction(a: { score: string }, b: { score: string }) {
    if (a.score < b.score) {
        return 1;
    }

    if (a.score > b.score) {
        return -1;
    }

    return 0;
}

export default {
    getRailData,
    getStationsList,
    filterStationsList
};
