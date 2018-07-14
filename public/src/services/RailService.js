let STATIONS = {};

function getRailData(from = 'LEW', to = 'CHX', coords = '') {
    const newCoords = coords ? `/${coords}` : '';

    return new Promise((resolve, reject) => {
        fetch(`/api/rail/${from}/${to}${newCoords}`)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(reject);
    });
}

function getStationsList(coords = '') {
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

function filterStationsList(filterString) {
    if (filterString === '' || filterString.length < 2) {
        return STATIONS;
    }

    const foundEntries = {};
    const searchString = filterString.toLowerCase();

    Object.entries(STATIONS).forEach((entry) => {
        const key = entry[0];
        const value = entry[1].title || entry[1];

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
        .sort((a, b) => {
            if (a[1].score < b[1].score) {
                return 1;
            }

            if (a[1].score > b[1].score) {
                return -1;
            }

            return 0;
        })
        .map((element) => {
            const objectToReturn = {};

            objectToReturn[element[0]] = element[1].value;

            return objectToReturn;
        })
        .filter(element => !!Object.values(element)[0])
        .forEach((element) => {
            const key = Object.keys(element)[0];
            const value = Object.values(element)[0];

            toReturn[key] = value;
        });

    return toReturn;
}

export default {
    getRailData,
    getStationsList,
    filterStationsList
};
