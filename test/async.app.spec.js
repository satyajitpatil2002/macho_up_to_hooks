const { fetchData } = require('../src/app');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const spies = require('chai-spies');
const axios = require('axios');

chai.use(spies);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Async Tests with Promises', () => {
  describe('(using done)', () => {
    it('should fetch data successfully', (done) => {
      const axiosGetStub = chai.spy.returns(Promise.resolve({ data: { data: { email: 'michael.lawson@reqres.in' } } }));
      chai.spy.on(axios, 'get', axiosGetStub);

      fetchData()
        .then((data) => {
          expect(data.email).to.be.equal('michael.lawson@reqres.in');
          expect(axios.get).to.have.been.called.with('https://reqres.in/api/users?page=2');
        })
        .then(done)
        .catch(done);
    });
  });

  describe('(using Promise)', () => {
    it('should fetch data successfully', () => {
      chai.spy.restore(); // Clear the spy before using it again
      const axiosGetStub = chai.spy.returns(Promise.resolve({ data: { data: { email: 'michael.lawson@reqres.in' } } }));
      chai.spy.on(axios, 'get', axiosGetStub);

      return expect(fetchData()).to.eventually.have.property('email', 'michael.lawson@reqres.in');
    });
  });

  describe('(using async/await)', () => {
    it('should fetch data successfully', async () => {
      chai.spy.restore(); // Clear the spy before using it again
      const axiosGetStub = chai.spy.returns(Promise.resolve({ data: { data: { email: 'michael.lawson@reqres.in' } } }));
      chai.spy.on(axios, 'get', axiosGetStub);

      const data = await fetchData();

      expect(data.email).to.be.equal('michael.lawson@reqres.in');
      expect(axios.get).to.have.been.called.with('https://reqres.in/api/users?page=2');
    });
  });
});
