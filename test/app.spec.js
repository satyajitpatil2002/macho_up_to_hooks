const { add,sub } = require('../src/app');
//The expect function from Chai is used to create an assertion
const expect = require('chai').expect;

// BDD n BDD, tests are written in a human-readable language, often using keywords like "describe," "it," and "expect."
describe('add function', () => {
    // Test case 1: Adding two positive numbers
    it('should add two positive numbers correctly', () => {
      expect(add(5, 3)).to.be.equal(8);
    });
  
    // Test case 2: Adding a positive number and zero
    it('should add a positive number and zero correctly', () => {
      expect(add(2, 0)).to.be.equal(2);
    });
  
    // Test case 3: Adding a negative number and a positive number
    it('should add a negative number and a positive number correctly', () => {
      expect(add(-5, 3)).to.be.equal(-2);
    });
  
    // Test case 4: Adding zero and a negative number
    it('should add zero and a negative number correctly', () => {
      expect(add(0, -4)).to.be.equal(-4);
    });
  
    // Test case 5: Adding two negative numbers
    it('should add two negative numbers correctly', () => {
      expect(add(-7, -3)).to.be.equal(-10);
    });
  
    // Test case 6: Handling decimal numbers
    it('should handle adding decimal numbers correctly', () => {
      expect(add(1.5, 2.5)).to.be.equal(4);
    });

});



// // //TDD style                  //"mocha --ui tdd"

// const assert = require('chai').assert;
// const { add } = require('../src/app');

// suite('add function', () => {
//   test('should add two positive numbers correctly', () => {
//     assert.strictEqual(add(5, 3), 8);
//   });

//   test('should add a positive number and zero correctly', () => {
//     assert.strictEqual(add(2, 0), 2);
//   });

//   test('should add a negative number and a positive number correctly', () => {
//     assert.strictEqual(add(-5, 3), -2);
//   });

//   test('should add zero and a negative number correctly', () => {
//     assert.strictEqual(add(0, -4), -4);
//   });

//   test('should add two negative numbers correctly', () => {
//     assert.strictEqual(add(-7, -3), -10);
//   });

//   test('should handle adding decimal numbers correctly', () => {
//     assert.strictEqual(add(1.5, 2.5), 4);
//   });


// });

// // hooks 


// //TDD style hookes  and bdd 

// //Structure:

// //BDD: Uses describe, before, after, beforeEach, afterEach, and it.
// //TDD: Uses suite, suiteSetup, suiteTeardown, setup, teardown, and test.





