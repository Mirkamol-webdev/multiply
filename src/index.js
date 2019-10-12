module.exports = function multiply(first, second) {
    // your solution
    var x =  BigInt(first);
    var y =  BigInt(second);
    var c =  (x * y);
    return c.toString();
}
