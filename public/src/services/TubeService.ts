interface ResultInterface {
    data: Array<Object>
}

function getTubeData(): Promise<ResultInterface> {
    return new Promise((resolve, reject) => {
        fetch('/api/tube')
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(reject);
    });
}

export default {
    getTubeData
};
