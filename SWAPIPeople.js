const axios = require('axios');

const getPeople = async () => {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    const people = await response.data;
  } catch (e) {
    console.log(e);
  }
};
