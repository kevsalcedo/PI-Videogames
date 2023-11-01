const { Videogame } = require("../db");
const axios = require("axios");

const createVideogame = async (
  name,
  description,
  plataforms,
  image,
  released,
  rating
) => {
  return await Videogame.create({
    name,
    description,
    plataforms,
    image,
    released,
    rating,
  });
};

const getVideogameById = async (id, source) => {
  const videogame =
    source === "bdd"
      ? await Videogame.findByPk(id)
      : await axios.get("https://api.rawg.io/api/games").data;

  if (!videogame) throw new Error("El videojuego no existe");

  return videogame;
};

const getAllVideogames = async () => {
  const bddVideogames = await Videogame.findAll();

  const apiVideogames = await (axios.get("https://api.rawg.io/api/games")).data

  return [...bddVideogames, ...apiVideogames]
};

const getVideogameByName = () => {

}


module.exports = {
  createVideogame,
  getVideogameById,
  getVideogameByName,
  getAllVideogames,
};
