
function size(cms) {
    if (cms < 38 && cms >=5) {
        return 'S';
    } else if (cms >= 38 && cms < 42) {
        return 'M';
    } else if(cms >= 42 && cms<=70) {
        return 'L';
    }
    else {
        return "Invalid Size";
    }
}


module.exports = {
    size
}
