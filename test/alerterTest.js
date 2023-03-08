//module to test the alerter  



function test() {
    const { alertFailureCount } = require('../alerter');
    const { assert, expect } = require('chai');
    
    //checking whether the failed alert count is greater than 0 0r not
    expect(alertFailureCount).not.equal(0);
    console.log('All is well');
    
}
module.exports = {
    test
}


