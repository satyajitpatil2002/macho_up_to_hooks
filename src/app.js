// ../src/app.js
// function add(a, b) {
//     return a + b;
//   }
  
//   function sub(a, b) {
//     return a - b;


//   }

//   module.exports = { add, sub };



// app.js
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

module.exports = { fetchData };
