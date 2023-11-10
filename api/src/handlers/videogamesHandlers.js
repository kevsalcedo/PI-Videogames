const {
  createVideogame,
  getVideogameById,
  getVideogameByName,
  getAllVideogames
} = require("../controllers/videogamesControllers");

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;

  const result = name ? await getVideogameByName(name) : await getAllVideogames();

  res.status(200).json(result);
};

const getVideogameHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const videogame = await getVideogameById(id, source);
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createVideogameHandler = async (req, res) => {
  try {
    const { name, description, platforms, image, released, rating, genres } =
      req.body;

    const newVideogame = await createVideogame(
      name,
      description,
      platforms,
      image,
      released,
      rating,
      genres
    );

    // await newVideogame.addGenres(genres);

    res.status(200).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameHandler,
  createVideogameHandler,
};
