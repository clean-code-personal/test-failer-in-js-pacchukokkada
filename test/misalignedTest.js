//module to test the misaligned 

//function to check the alignment
function checkAlignment(manual){
    if(manual[0][3] != '|' || manual[10][3] != '|')
        return 0;
    if(manual[0][12] != '|' || manual[5][12] != '|' || manual[10][12] != '|' || manual[15][12] != '|')
        return 0;
    return 1;
}

function test(){
    const { manual,colors } = require('../misaligned');
    const { expect } = require('chai');
    //checking whether code starts from 1 or not
    expect(manual[0][0]).equal('1');
    //checking whether the color combination is correct or not 
    expect(colors[0][0]).equal('White');
    expect(colors[0][1]).equal('Blue');
    //checking the alignment of the separator
    expect(checkAlignment(manual)).equal(1);
    console.log("All is well");
}

module.exports = {
    test
}


