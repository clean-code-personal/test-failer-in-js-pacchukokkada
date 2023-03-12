//module to test the tshirts whether it is classifying correctly
const { expect } = require('chai')
const { size } = require('../tshirts')

function test(){

    describe('Checking whether function gives correct size', ()=> {
        it("should return 'M' for 38cms", () => {
            expect(size(38)).equal('M')
        });
        it("should return 'Invalid Size for -1cms", () => {
            expect(size(-1)).equal('Invalid Size');
        });
        it("should return ''Invalid Size' for 300cms ", () => {
            expect(size(300)).equal('Invalid Size');
        });
    });
    console.log("All is well");

}

test();