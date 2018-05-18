/**
 * Created by duncanogle on 29/06/2017.
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
