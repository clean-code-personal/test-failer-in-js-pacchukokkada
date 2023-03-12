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
    describe('Checking color combination and alignment of separator', () => {
        print_color_map();
        it('code should starts from 1', ()=> {
            expect(manual[0][0]).equal('1');
        });
        it('alignment of separator should be correct, checkAlignment() should return 1', () => {
            expect(checkAlignment()).equal(1);
        });
        it('color combination should be correct, checkColorCombination() should return 1', () => {
            expect(checkColorCombination()).equal(1);
        });
    });
    
    console.log("All is well");
}



test();