// test/async.app.spec.js
//with done 

// const { fetchData } = require('../src/app');
// const chai = require('chai');
// const spies = require('chai-spies');
// const axios = require('axios');

// chai.use(spies);
// const expect = chai.expect;

// describe('Async Tests with Promises (using done)', () => {
//   it('should fetch data successfully', (done) => {
//     // Mock the axios.get method to return a resolved Promise with sample data
//     const axiosGetStub = chai.spy.returns(Promise.resolve({ data: { data: { email: 'michael.lawson@reqres.in' } } }));
//     chai.spy.on(axios, 'get', axiosGetStub);

//     // Use the fetchData function
//     fetchData().then((data) => {
//       // Expectations using chai-as-promised
//       expect(data.email).to.be.equal('michael.lawson@reqres.in');
//       // Assert that the axios.get method was called with the correct URL
//       expect(axios.get).to.have.been.called.with('https://reqres.in/api/users?page=2');
//       done(); // Call done() to signal the end of the test
//     }).catch(done); // Call done() in case of errors
//   });
// });


// //with  promice 

// const { fetchData } = require('../src/app');
// const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const spies = require('chai-spies');
// const axios = require('axios');

// chai.use(chaiAsPromised);
// chai.use(spies);
// const expect = chai.expect;

// describe('Async Tests with Promises (using Promise)', () => {
//   it('should fetch data successfully', () => {
//     // Mock the axios.get method to return a resolved Promise with sample data
//     const axiosGetStub = chai.spy.returns(Promise.resolve({ data: { data: { email: 'michael.lawson@reqres.in' } } }));
//     chai.spy.on(axios, 'get', axiosGetStub);

//     // Use the fetchData function and return the Promise
//     return expect(fetchData()).to.eventually.have.property('email', 'michael.lawson@reqres.in');
//   });
// });


// with async/await:

const { fetchData } = require('../src/app');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const spies = require('chai-spies');
const axios = require('axios');

chai.use(chaiAsPromised);
chai.use(spies);
const expect = chai.expect;

describe('Async Tests with Promises (using async/await)', () => {
  it('should fetch data successfully', async () => {
    // Mock the axios.get method to return a resolved Promise with sample data
    const axiosGetStub = chai.spy.returns(Promise.resolve({ data: { data: { email: 'michael.lawson@reqres.in' } } }));
    chai.spy.on(axios, 'get', axiosGetStub);

    // Use async/await with fetchData function
    const data = await fetchData();

    // Expectations using chai-as-promised
    expect(data.email).to.be.equal('michael.lawson@reqres.in');
    // Assert that the axios.get method was called with the correct URL
    expect(axios.get).to.have.been.called.with('https://reqres.in/api/users?page=2');
  });
});



