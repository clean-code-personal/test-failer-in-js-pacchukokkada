//module to test the misaligned 
const { manual, majorColors, minorColors, colorCombination, print_color_map } = require('../misaligned');
const { expect } = require('chai');


//function to check the alignment
function checkAlignment(){
    let firstSeparatorLoc = 3;
    let secondSeparatorLoc = 12;
    for(let i=0;i<manual.length;i++)
        if(manual[i][firstSeparatorLoc] != '|' || manual[i][secondSeparatorLoc] != '|')
            return 0;
    return 1;
}

//function to check the color combination
function checkColorCombination()
{
    let index=0;
    for(let i=0;i<majorColors.length;i++)
    {
        for(let j=0;j<minorColors.length;j++)
        {
            if(colorCombination[index].majorColor != majorColors[i] || colorCombination[index].minorColor != minorColors[j])
                return 0;
            index++;
        }
    }
    return 1;
}

function test(){
    print_color_map();
    //checking whether code starts from 1 or not
    expect(manual[0][0]).equal('1');
    // //checking the alignment of the separator
    expect(checkAlignment()).equal(1);
    //checking the color-combination with respect to color code
    expect(checkColorCombination()).equal(1);
    console.log("All is well");
}



test();