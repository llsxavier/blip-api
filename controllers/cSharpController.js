const api = require('../services/takenetApi');

const cSharp = async (_, res) => {
  try {
    let data = await api.cSharpFiltered();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res
      .status(503)
      .json({ err: 'Servidor indisponível. Tente novamente mais tarde!' });
  }
};

module.exports = {
  cSharp,
};
