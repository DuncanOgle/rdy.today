/**
 * Created by duncanogle on 29/06/2017.
 */

class TubeService {
  static getTubeData() {
    return new Promise((resolve, reject) => {
      fetch('https://rdy.today/api/tube')
        .then((response) => {
          resolve(response.json());
        })
        .catch(() => {
          reject();
        });
    });
  }
}

export default TubeService;
