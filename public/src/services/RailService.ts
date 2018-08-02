import { MetaDataInterface } from '../components/RailFromTo';

export interface ResultInterface {
    data: {
        times: Array<string>,
        messages: Array<string>,
        meta: MetaDataInterface
    }
}

let STATIONS = {};

function getRailData(from = 'LEW', to = 'CHX', coords = ''): Promise<ResultInterface> {
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
        if (Object.keys(STATIONS).length) {
            return resolve({ data: STATIONS });
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

    const foundEntries = {};
    const searchString = filterString.toLowerCase();

    Object.keys(STATIONS).forEach(key => {
        const value = STATIONS[key].title || STATIONS[key];

        if (!foundEntries[key]) {
            foundEntries[key] = {
                value: '',
                score: 0
            };
        }

        if (key.toLowerCase().includes(searchString)) {
            foundEntries[key].value = value;
            foundEntries[key].score += 5;
        }

        if (value.toLowerCase() === searchString) {
            foundEntries[key].value = value;
            foundEntries[key].score += 2.5;
        }

        if (value.toLowerCase().startsWith(searchString)) {
            foundEntries[key].value = value;
            foundEntries[key].score += 1.5;
        }

        if (value.toLowerCase().includes(searchString)) {
            foundEntries[key].value = value;
            foundEntries[key].score += 1;
        }
    });

    const toReturn = {};
    Object.entries(foundEntries)
        .sort(sortFunction)
        .map(rebuildObject)
        .filter(element => !!Object.values(element)[0])
        .forEach((element) => {
            const key = Object.keys(element)[0];

            toReturn[key] = Object.values(element)[0];
        });

    return toReturn;
}

function sortFunction(a, b) {
    if (a[1].score < b[1].score) {
        return 1;
    }

    if (a[1].score > b[1].score) {
        return -1;
    }

    return 0;
}

function rebuildObject(element) {
    const objectToReturn = {};

    objectToReturn[element[0]] = element[1].value;

    return objectToReturn;
}

export default {
    getRailData,
    getStationsList,
    filterStationsList
};
