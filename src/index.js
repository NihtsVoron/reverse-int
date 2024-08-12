module.exports = function reverse (n) {
    let testValue = Math.abs(n).toString();
    let result='';

    for(let i= testValue.length-1; i>=0;i--)
    {
        result = result+ testValue[i];
    }

    return Number(result);
}
