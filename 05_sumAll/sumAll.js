const sumAll = function(param1, param2) {
    if(!Number.isInteger(param1) || !Number.isInteger(param2)) {
        return "ERROR";
    }
    if(param1 < 0 || param2 < 0) {
        return "ERROR";
    }

    let min = Math.min(param1, param2);
    let max = Math.max(param1, param2);

    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
