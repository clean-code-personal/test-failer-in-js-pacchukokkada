const {expect} = require('chai');
const { test } = require('./test/tshirtTest');

function size(cms) {
    if (cms < 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}


module.exports = {
    size
}

test();