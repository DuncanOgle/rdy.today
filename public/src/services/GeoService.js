/**
 * Takes raw geoloaction result and parses it into a simple object
 * @param {Object} position
 * @returns {{lat: string|number, lon: string|number}}
 */
function positionToObject(position) {
    return {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
}

function getGeoPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation
            .getCurrentPosition(
                (position) => {
                    resolve(positionToObject(position));
                },
                () => reject()
            );
    });
}

export default {
    positionToObject,
    getGeoPosition
};
