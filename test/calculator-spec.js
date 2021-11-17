var chai = require("chai");
var expect = chai.expect;
var Calculator = require("../src/calculator")

describe('calculator-flat', function () {
    this.timeout(100*1000);
    var calculator = new Calculator.calculator();
    it.skip('should add',   function () {
        expect(calculator.add(2, 4)).eq(6)
    });
    it('should sub',   function () {
        expect(calculator.sub(4, 2)).eq(2)
    });
    it('should NOT fail',   function () {
        expect(calculator.sub(4, 2)).eq(2)
    });
    it('should multiple',  function () {
        expect(calculator.multiple(2, 4)).eq(8)
    });
    it('should divide',   function () {
        expect(calculator.divide(4, 2)).eq(2)
    });
    it('should divide by 0',   function () {
        expect(calculator.divide(4, 0)).eq(4)
    });
    it('should divide by 0 again',   function () {
        expect(calculator.divide(4, 0)).eq(4)
    });
    it('should divide by 0 again -2 ',   function () {
        expect(calculator.divide(4, 0)).eq(4)
    });
});