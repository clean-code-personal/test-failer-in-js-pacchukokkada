//module to test the misaligned 

//function to check the alignment
function checkAlignment(manual){
    for(let i=0;i<manual.length;i++)
        if(manual[i][3] != '|' || manual[i][12] != '|')
            return 0;
    return 1;
}

//function to check the color combination
function checkColorCombination(colors,majorColors,minorColors)
{
    let m=0;
    for(let i=0;i<5;i++)
    {
        for(let j=0;j<5;j++)
        {
            if(colors[m][0] != majorColors[i] || colors[m][1] != minorColors[j])
                return 0;
            m = m+1;
        }
    }
    return 1;
}

function test(){
    const { manual,colors, majorColors, minorColors } = require('../misaligned');
    const { expect } = require('chai');
    //checking whether code starts from 1 or not
    expect(manual[0][0]).equal('1');
    // //checking whether the color combination is correct or not 
    expect(colors[0][0]).equal('White');
    expect(colors[0][1]).equal('Blue');
    // //checking the alignment of the separator
    expect(checkAlignment(manual)).equal(1);
    expect(checkColorCombination(colors,majorColors,minorColors)).equal(1);
    console.log("All is well");
}

module.exports = {
    test
}


