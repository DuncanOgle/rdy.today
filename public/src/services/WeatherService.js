/**
 * @param {String} [coords]
 * @returns {Promise<any>}
 */
function getWeatherData(coords) {
    return new Promise((resolve, reject) => {
        fetch(`/api/weather${coords ? `/${coords}` : ''}`)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(reject);
    });
}

export default {
    getWeatherData
};
