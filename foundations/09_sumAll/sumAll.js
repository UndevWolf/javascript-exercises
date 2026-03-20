const sumAll = function(num1,num2) {
    if (!Number.isInteger(num1) && !Number.isInteger(num2) && (num1 < 0 || num2 < 0)) {
        return "ERROR"
    }
    if (num1 > num2)
    {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    const array = [];
        for (i = num1;i<num2+1;i++ ){
        array.push(i);
        }
        return array.reduce((total,current) => total + current)
};

// Do not edit below this line
module.exports = sumAll;
