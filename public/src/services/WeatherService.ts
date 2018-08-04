export interface WeatherResultInterface {
    data: Array<WeatherRowInterface>
}

export interface WeatherRowInterface {
    condition: string,
    feelsLike: number,
    hour: number
    humidity: number,
    pop: number
    temperature: number,
    windDirection: string,
    windSpeed: number
}

function getWeatherData(coords: string): Promise<WeatherResultInterface> {
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
