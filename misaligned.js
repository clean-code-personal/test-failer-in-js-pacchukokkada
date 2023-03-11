const {expect} = require('chai');

let manual = [];
let colorCombination = [];
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
function print_color_map() {
    
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            let code =  (i*5+j+1).toString() 
            //aligning separator(|) 
            let codeWithPadding = code + " ".repeat(3-code.length)+"|"; 
            majColorWithPadding = majorColors[i] + " ".repeat(11 - (codeWithPadding.length + majorColors[i].length))+ "|";
            
            console.log(`${codeWithPadding} ${majColorWithPadding} ${minorColors[j]}`);
            let st = codeWithPadding+" "+majColorWithPadding+" "+minorColors[j];
            manual.push(st);   
            colorCombination.push({'majorColor':majorColors[i],'minorColor':minorColors[j]}); 
        }
    }
    return majorColors.length * minorColors.length;
}

module.exports = {
    print_color_map,
    manual,
    colorCombination,
    majorColors,
    minorColors
}

