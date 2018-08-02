interface ResultInterface {
    data: Array<Object>
}

function getWeatherData(coords: string): Promise<ResultInterface> {
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
