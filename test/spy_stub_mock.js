const { expect } = require('chai');
const sinon = require('sinon');
const { add, subtract, multiply, divide } = require('../src/calc');

// Your test code using sinon.mock...

describe('Calculator Tests', () => {
  describe('Spy Tests', () => {
    it('should call the add method once with the correct arguments', () => {
      const spy = sinon.spy(add);

      // Act
      const result = spy(3, 5);

      // Assert
      expect(result).to.equal(8);
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWithExactly(3, 5)).to.be.true;
    });

    it('should call the divide method once with the correct arguments', () => {
      const spy = sinon.spy(divide);

      // Act
      const result = spy(10, 2);

      // Assert
      expect(result).to.equal(5);
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWithExactly(10, 2)).to.be.true;
    });
  });

  describe('Stub Tests', () => {
    it('should stub the subtract method and return a specific value', () => {
      const stub = sinon.stub().withArgs(7, 2).returns(42);

      // Act
      const result = stub(7, 2);

      // Assert
      expect(result).to.equal(42);
    });
  });

  describe('Mock Tests', () => {
    it('should mock the multiply method and expect it to be called once', () => {
      // Create a mock for the entire calc module
      const calcMock = sinon.mock(require('../src/calc'));

      // Set expectations for the multiply method
      calcMock.expects('multiply').once().withArgs(3, 5).returns(15);

      // Act
      const result = multiply(3, 5);

      // Assert
      expect(result).to.equal(15);

      // Verify that the expected behavior (multiplication) occurred
      calcMock.verify();

      // Restore the original behavior of multiply
      calcMock.restore();
    });
  });
});


