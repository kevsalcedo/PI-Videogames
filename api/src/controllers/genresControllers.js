const axios = require("axios");

const getAllGenres = async () => {
  const apiGenres = (
    await axios.get(
      `https://api.rawg.io/api/genres?key=e690bf1004dc4a7ba04b90e436301b50`
    )
  ).data.results;
  console.log("allGenres", apiGenres)
  return apiGenres;
};

module.exports = {
  getAllGenres,
};
