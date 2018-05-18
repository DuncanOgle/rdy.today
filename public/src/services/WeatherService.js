/**
 * Created by duncanogle on 29/06/2017.
 */

/**
 * @param {String} [coords]
 * @returns {Promise<any>}
 */
function getWeatherData(coords = '51.5245104,-0.0863409') {
    return new Promise((resolve, reject) => {
        fetch(`/api/weather${coords ? `/${coords}` : ''}`)
            .then((response) => {
                resolve(response.json());
            })
            .catch(() => {
                reject();
            });
    });
}

export default {
    getWeatherData
};
