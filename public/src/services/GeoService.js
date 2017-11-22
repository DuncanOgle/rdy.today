/**
 * Created by duncanogle on 29/06/2017.
 */

class GeoService {
  static getGeoPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      }, () => reject());
    });
  }
}

export default GeoService;
