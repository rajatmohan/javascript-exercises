const fibonacci = function(n) {
    n = Number(n)
    if(n < 0 || isNaN(n)) {
        return "OOPS";
    }
    if(n === 1) {
        return 1;
    }
    else if(n === 2) {
        return 1;
    }
    c = 2;
    for(let i = 3, p = 1, pp = 1; i <= n; i++) {
        c = p+pp;
        pp = p;
        p = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
