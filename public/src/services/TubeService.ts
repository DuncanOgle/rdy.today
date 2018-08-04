interface TubeResultInterface {
    data: Array<TubeRowInterface>
}

export interface TubeRowInterface {
    line: string,
    disruption: string
}

function getTubeData(): Promise<TubeResultInterface> {
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
