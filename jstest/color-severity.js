// Takes in a DeltaExhaust value in deg C from the ENG LOAD attribute
// Outputs a hex color depending on severity
function EvaluateDeltaExhaust (deltaT) {
    var hexColorOut;
    var absDeltaT = Math.abs(deltaT);

    // Blue if good
    if (absDeltaT <= 20) {
        hexColorOut = "#1a237e";
    }
    // Amber if warning
    else if (absDeltaT > 20 && absDeltaT <= 50 ) {
        hexColorOut = "#ffab00";
    }
    // Red if danger
    else {
        hexColorOut = "#b71c1c";
    }
    return hexColorOut;
}