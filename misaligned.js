const {expect} = require('chai');
const { test } = require('./test/misalignedTest');

let manual = [];
let colors = [];
function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
            let st = `${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`;
            manual.push(st);
            let col = [];
            col.push(majorColors[i]);
            col.push(minorColors[i]);
            colors.push(col); 
        }
    }
    return majorColors.length * minorColors.length;
}

//result = print_color_map();
// expect(result).equals(25);
// console.log('All is well (maybe!)');

module.exports = {
    manual,
    colors
}
let size = print_color_map();
test()

