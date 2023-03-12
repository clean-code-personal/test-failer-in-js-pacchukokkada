//module to test the alerter  

const { expect } = require('chai');
const { alertInCelcius, getAlertFailureCount } = require('../alerter');
const { networkAlertStub } = require("./networkStub");

function test() {      
    describe('Checking the alertFailureCount', () => {
        alertInCelcius(400.5,networkAlertStub);
        alertInCelcius(300,networkAlertStub);
        it('should be equal to 1', () => {
            expect(getAlertFailureCount()).equal(1);
        })
    });
    console.log('All is well');   
}

test();

