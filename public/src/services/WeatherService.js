/**
 * Created by duncanogle on 29/06/2017.
 */

class WeatherService {
  static getWeatherData(coords = '51.5245104,-0.0863409') {
    return new Promise((resolve, reject) => {
      fetch(`https://rdy.today/api/weather${coords ? `/${coords}` : ''}`)
        .then((response) => {
          resolve(response.json());
        })
        .catch(() => {
          reject();
        });
    });
  }
}

export default WeatherService;
