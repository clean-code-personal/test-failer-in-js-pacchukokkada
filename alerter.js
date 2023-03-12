
let alertFailureCount = 0;
function alertInCelcius(farenheit,alertNetwork) {
    const celcius = (farenheit - 32) * 5 / 9;
    //passing the temperature value to network 
    const returnCode = alertNetwork(celcius);
    if (returnCode != 200) {
        alertFailureCount += 1;
    }
}

//function to return alertFailure count
function getAlertFailureCount(){
    return alertFailureCount;
}

module.exports = {
    getAlertFailureCount,
    alertInCelcius
}

