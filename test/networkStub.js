//module which works as a network stub for alerter

let threshlod = 200;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    if(celcius <threshlod)
        return 200;
    else
        return 500;
}

module.exports = {
    networkAlertStub
}