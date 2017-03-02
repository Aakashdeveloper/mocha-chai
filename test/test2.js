'use strict';
/*start with mocha -w for moniter on real time*/

var chai = require('chai'),
  expect = chai.expect;

chai.should();

describe('alltest', function() {
  /*Number expect to retun True for even*/
  function isEven(num) {
    return num % 2 === 0;
  }

  /*Start writing First test case**/
  describe('isEven', function() {
    /*This is the one way of writing the test case*/
    it('should return true when even', function() {
        isEven(4).should.be.true
      })
      /*This is the one way of writing the test case using "Expect"*/
    it('should return false when number is odd', function() {
      expect(isEven(5)).to.be.false
    })
  });


  /*Function need to add number*/
  function add(num1, num2) {
    return num1 + num2;
  }

  /*Start Write test case to check Add function */
  /*If want to run some specific test case only add describe.only*/
  describe('add without setup/teardown', function() {
    var num;
    /* For each test case it will again set the value*/
    beforeEach(function() {
      num = 5;
    })

    /*This function will rum after each test case*/
    afterEach(function() {

      })
      /* this should give addition of 2 number*/
    it('should be true when adding 5 to 5', function() {
        num = add(num, 5);
        num.should.equal(10);
      })
      /* If you dont use beforeEach function this test case 
     going to fail  as it every time append result of number
     We need to add Before Each for setting variable every
     time
  */

    it('should be true when adding 7 to 5', function() {
      add(num, 7).should.equal(12);
    })
    /*To skip any particluar use case add "it.skip" or "xit*/
    it.skip('should be true when adding 8 to 5', function() {
      add(num, 8).should.equal(13);
    })
  })

  function concat(a, b) {
    return "" + a + b;
  }
 /* To skip any test add "describe.skip" or xdescribe */
  describe('will return string', function() {
    it('should return string', function() {
      concat(1, 1).should.equal("11")
    })
  })
});