//module to test the alerter  

const { expect } = require('chai');
const { alertInCelcius, getAlertFailureCount } = require('../alerter');
const { networkAlertStub } = require("../networkStub");

function test() {      
    //passing temperature in farenheit along with networkAlertStub function 
    alertInCelcius(400.5,networkAlertStub);
    alertInCelcius(300,networkAlertStub);
    //checking whether the alertFailureCount is one or not
    expect(getAlertFailureCount()).equal(1);
    console.log('All is well');   
}

test();

