const fibonacci = function(num) {
    if (num == 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }
    else {
    let a = 0,
        b = 1,
        n = +num,
        fibo = [1];
    for (i = 0;i < n-1;i++) {
        let nextNum = a + b;
        fibo.push(nextNum);
        a = b;
        b = nextNum;
    };
    return fibo[fibo.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
