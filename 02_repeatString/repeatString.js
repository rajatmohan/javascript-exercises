const repeatString = function(str, times) {
    if(times < 0) {
        return 'ERROR'
    }
    let repeatedString = "";
    while(times > 0) {
        repeatedString += str;
        times--;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
