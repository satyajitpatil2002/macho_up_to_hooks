const assert = require('chai').assert;

describe('Array Tests', () => {
  it('should have length of 3', () => {
    const arr = [1, 2, 3];
    assert.lengthOf(arr, 3);
  });

  it('should include value 5', () => {
    const arr = [1, 2, 3, 5];
    assert.include(arr, 5);
  });

  it('should be empty', () => {
    const arr = [];
    assert.isEmpty(arr);
  });
});

//using expect style 
const expect = require('chai').expect;

describe('Array Tests', () => {
  it('should have length of 3', () => {
    const arr = [1, 2, 3];
    expect(arr).to.have.lengthOf(3);
  });

  it('should include value 5', () => {
    const arr = [1, 2, 3, 5];
    expect(arr).to.include(5);
  });

  it('should be empty', () => {
    const arr = [];
    expect(arr).to.be.empty;
  });
});

//using should 

const should = require('chai').should();

describe('Array Tests', () => {
  it('should have length of 3', () => {
    const arr = [1, 2, 3];
    arr.should.have.lengthOf(3);
  });

  it('should include value 5', () => {
    const arr = [1, 2, 3, 5];
    arr.should.include(5);
  });

  it('should be empty', () => {
    const arr = [];
    arr.should.be.empty;
  });
});
