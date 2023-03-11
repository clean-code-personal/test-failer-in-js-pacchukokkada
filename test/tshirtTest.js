//module to test the tshirts whether it is classifying correctly
const { expect } = require('chai')
const { size } = require('../tshirts')

function test(){
    //checking whether it gives size for size less than minumum size and maximum size
    expect(size(38)).equal('M')
    expect(size(-1)).equal('Invalid Size');
    expect(size(300)).equal('Invalid Size');
    console.log("All is well");

}

test();