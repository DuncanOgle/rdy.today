import { h } from 'preact';

const styling = {
    padding: '5px 5px'
};

function getStatus(row) {
    return row.cancelReason ? 'Cancelled' : row.etd;
}

function getStatusText(row) {
    let toReturn = '';

    if (row.cancelReason || row.delayReason) {
        toReturn = `<br><small>${row.cancelReason || row.delayReason}</small>`;
    }

    return toReturn;
}

const RailRow = (props) => {
    const row = props.row;

    const key = `${row.std}${row.etd}${row.platform}${row.from}${row.to}`;
    const platform = row.platform ? ` / Platform ${row.platform}` : '';
    const departureTime = row.std;
    const trainStatus = getStatus(row);

    return (
        <p key={key} style={styling}>
            {departureTime} ({trainStatus}) {platform}
            <span dangerouslySetInnerHTML={{ __html: getStatusText(row) }} />
        </p>
    );
};

export default RailRow;
