const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com/users/takenet/repos?page=1&per_page=100',
});

const languages = [];
api.interceptors.response.use((config) => {
  try {
    config.data.forEach((data) => {
      if (data.language === 'C#') {
        languages.push(data);
        languages.sort(function (a, b) {
          var keyA = new Date(a.created_at),
            keyB = new Date(b.created_at);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
  config.data = languages.slice(0, 5);
  return config;
});

const cSharpFiltered = async () => {
  let result;
  try {
    await api
      .get()
      .then((data) => {
        console.log(data)
        result = {
          1: data.data[0],
          2: data.data[1],
          3: data.data[2],
          4: data.data[3],
          5: data.data[4],
        };
      })
      .catch((error) => {
        throw new Error(error);
      });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  cSharpFiltered,
};
