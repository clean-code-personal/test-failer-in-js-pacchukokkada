//module to test the alerter  

const { expect } = require('chai');
const { alertInCelcius, getAlertFailureCount } = require('../alerter');

function test() {      

    alertInCelcius(400.5);
    alertInCelcius(300);
    //checking whether the alertFailureCount is one or not
    expect(getAlertFailureCount()).equal(1);
    console.log('All is well');   
}

test();

