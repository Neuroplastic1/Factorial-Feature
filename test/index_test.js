var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {

    it('test if the output of 5! is equal to 120', () => {
      //setup
      const inputNumber = 5
      const expected = 120
      //excercise
      const result = Calculate.factorial(inputNumber)
      //verify
      assert.equal(result, expected)
  });

  it('test if the output of 3! is equal to 6', () => {
      //setup
      const inputNumber = 3
      const expected = 6
      //excercise
      const result = Calculate.factorial(inputNumber)
      //verify
      assert.equal(result, expected)
  });

  it('returns 1 when you pass in 0', () => {
      //setup
      const inputNumber = 0
      const expected = 1
      //excercise
      const result = Calculate.factorial(inputNumber)
      //verify
      assert.equal(result, expected)
  });


  });
});
