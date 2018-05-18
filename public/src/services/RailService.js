/**
 * Created by duncanogle on 29/06/2017.
 */

function getRailData(from = 'LEW', to = 'CHX', coords = '') {
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

export default {
    getRailData
};
