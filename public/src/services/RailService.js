/**
 * Created by duncanogle on 29/06/2017.
 */

class RailService {
  static getRailData(from = 'LEW', to = 'LBG', coords = '51.5245104,-0.0863409') {
    return new Promise((resolve, reject) => {
      fetch(`/api/rail/${from}/${to}${coords ? `/${coords}` : ''}`)
        .then((response) => {
          resolve(response.json());
        })
        .catch(() => {
          reject();
        });
    });
  }
}

export default RailService;
