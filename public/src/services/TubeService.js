/**
 * Created by duncanogle on 29/06/2017.
 */

function getTubeData() {
    return new Promise((resolve, reject) => {
        fetch('/api/tube')
            .then((response) => {
                resolve(response.json());
            })
            .catch(() => {
                reject();
            });
    });
}

export default {
    getTubeData
};
