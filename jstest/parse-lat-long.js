
function parseLatLong(apiCallResults) {
    var mapDataOut = [];

    var numTrucks = apiCallResults.LngValues.Content.Items.length;

    for (var i_truck = 0; i_truck < numTrucks; i_truck++)
    {
        mapDataOut.push({
            numTruck: 400 + i_truck,
            latitude: apiCallResults.LatValues.Content.Items[i_truck].Content.Value,
            longitude: apiCallResults.LngValues.Content.Items[i_truck].Content.Value,
        });
    }

    return mapDataOut;
};