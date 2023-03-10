const { networkAlertStub } = require("./networkStub");

let alertFailureCount = 0;
function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celcius);
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

