var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should be able to add', function() {
    calculator.previousTotal = 4;
    calculator.add(5);
    const actual = calculator.runningTotal;
    const expected = 9;
    assert.equal(actual, expected);
  });

  it('it should be able to subtract', function() {
    calculator.previousTotal = 10;
    calculator.subtract(2);
    const actual = calculator.runningTotal;
    const expected = 8;
    assert.equal(actual, expected);
  });

  it('it should be able to multiply', function() {
    calculator.previousTotal = 10;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    const expected = 50;
    assert.equal(actual, expected);
  });

  it('it should be able to divide', function() {
    calculator.previousTotal = 50;
    calculator.divide(5);
    const actual = calculator.runningTotal;
    const expected = 10;
    assert.equal(actual, expected);
  });

  it('it should be able to click numbers', function() {
    calculator.numberClick(9);
    const actual = calculator.runningTotal;
    const expected = 9;
    assert.equal(actual, expected)
  });

  it('it should be able to click operators', function() {
    calculator.operatorClick('+');
    const actual = calculator.previousOperator;
    const expected = '+';
    assert.equal(actual, expected)
  });

  it('it should be able to clear click', function() {
    calculator.numberClick(9);
    calculator.clearClick();
    const actual = calculator.runningTotal;
    const expected = 0;
    assert.equal(actual, expected)

  });

  it('it should be able to add 1+4 and get 5', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('it should be able to substract 7-4 and get 3', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    const expected = 3;
    assert.equal(actual, expected);
  });

  it('it should be able to multiply 3*5 and get 15', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    const expected = 15;
    assert.equal(actual, expected);
  });

  it('it should be able to divide 21/7 and get 3', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    const expected = 3;
    assert.equal(actual, expected);
  });

  it('it should concatenate multiple number button clicks ', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    const actual = calculator.runningTotal;
    const expected = 12345;
    assert.equal(actual, expected);
  });

  it('it should chain multiple operations together', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 3.5714285714285716;
    assert.equal(actual, expected);
  });

  it('it should clear the running total without affecting the calculation', function() {
    calculator.numberClick(10);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 12;
    assert.equal(actual, expected);
  });

  it('it should give infinity when dividing by 0', function() {
    calculator.numberClick(10);
    calculator.operatorClick('/');
    calculator.numberClick(0);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = Infinity;
    assert.equal(actual, expected);
  });





});
