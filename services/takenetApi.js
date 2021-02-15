const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com/users/takenet/repos?page=1&per_page=100',
});

const cSharpFiltered = async () => {
  let result;
  try {
    await api
      .get()
      .then((response) => {
        const data = response.data
          .filter((repository) => repository.language === 'C#')
          .sort((a, b) => {
            var keyA = new Date(a.created_at),
              keyB = new Date(b.created_at);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          })
          .slice(0, 5);
        result = {
          1: data[0],
          2: data[1],
          3: data[2],
          4: data[3],
          5: data[4],
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
