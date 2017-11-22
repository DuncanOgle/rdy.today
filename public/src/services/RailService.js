/**
 * Created by duncanogle on 29/06/2017.
 */

class RailService {
  static getRailData(from = 'LEW', to = 'LBG', coords = '') {
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

  static getRailStations(query) {
    return new Promise((resolve, reject) => {
      fetch(`/api/rail/search/${query}`)
        .then((response) => {
          this.lastSearch = response.json();
          resolve(this.lastSearch);
        })
        .catch(() => {
          reject();
        });
    });
  }

  static getLastSearch() {
    return this.lastSearch;
  }
}

export default RailService;
