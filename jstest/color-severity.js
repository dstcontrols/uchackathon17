// hex color database
var hexColorSafe = "#1a237e";
var hexColorWarning = "#ffab00";
var hexColorDanger = "#b71c1c";

// Takes in a DeltaExhaust value in deg C from the RT-LT EXH TEMP attribute
// Outputs a hex color depending on severity
function EvaluateDeltaExhaust (deltaT) {
    var hexColorOut;
    var absDeltaT = Math.abs(deltaT);

    // Blue if good
    if (absDeltaT <= 20) {
        hexColorOut = hexColorSafe;
    }
    // Amber if warning
    else if (absDeltaT > 20 && absDeltaT <= 50 ) {
        hexColorOut = hexColorWarning;
    }
    // Red if danger
    else {
        hexColorOut = hexColorDanger;
    }
    return hexColorOut;
}

// Takes in Engine Oil Pressure in kPa from the ENG OIL PRES attribute
// Outputs a hex color depending on severity
function EvaluateEngineOilPressure(P_Oil_KPa) {
    var hexColorOut;
    var P_Oil_psi = P_Oil_KPa * 0.145038;

    if (P_Oil_psi > 87 || P_Oil_psi < 31) {
        hexColorOut = hexColorWarning;
    }
    else {
        hexColorOut = hexColorSafe;
    }

    return hexColorOut;
}

// Takes in Boost Pressure in psi from the BOOST PRES attribute
// Outputs a hex color depending on severity
function EvaluateBoostPressure(P_Boost) {
    var hexColorOut;

    if (P_Boost > 27 || P_Boost < 21) {
        hexColorOut = hexColorWarning;
    }
    else {
        hexColorOut = hexColorSafe;
    }

    return hexColorOut;
}

// Takes in Delta Brake Temperature from the front or rear from RTF-LTF BRKTEMP