const { getAllGenres } = require("../controllers/genresControllers");

const getGenresHandler = async (req, res) => {
  try {
    const allGenres = await getAllGenres();

    res.status(200).json(allGenres);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = { getGenresHandler };
