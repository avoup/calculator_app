function calculator() {
}

calculator.prototype.add = function(a, b){
    return a + b;
}

calculator.prototype.sub = function (a, b){
    console.log("sub")
    return a - b;
}

calculator.prototype.multiple = function(a, b){
    return a * b;
}

calculator.prototype.divide = function(a, b){
    if(b === 0 ){
        return a;
    }
    return a / b;
}
calculator.prototype.malfuntion = function(a, b) {
    return a % b
}
calculator.prototype.risk = function(a, b) {
    return a+b;
}
module.exports.calculator = calculator;
