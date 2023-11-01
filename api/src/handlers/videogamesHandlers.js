const {
  createVideogame,
  getVideogameById,
  getVideogameByName,
  getAllVideogames
} = require("../controllers/videogamesControllers");

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;

  const result = name ? getVideogameByName(name) : getAllVideogames();

  try {

    if (!name) {
      const allVideogames = await Videogame.findAll();

      res.status(200).json(allVideogames);
    } else {
      const videogameByName = await Videogame.findAll({
        where: {
          name,
        },
        limit: 15,
      });

      res.status(200).json(videogameByName);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
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
    const { name, description, plataforms, image, released, rating, genres } =
      req.body;

    const newVideogame = await createVideogame(
      name,
      description,
      plataforms,
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
