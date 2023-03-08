//module to test the tshirts whether it is classifying correctly


function test(){
    const { expect } = require('chai')
    const { size } = require('../tshirts')

    //checking whether it gives size for size less than minumum size and maximum size
    expect(size(0)).not.equal('S')
    expect(size(150)).not.equal('L')
    console.log("All is well");

}

module.exports = {
    test
}