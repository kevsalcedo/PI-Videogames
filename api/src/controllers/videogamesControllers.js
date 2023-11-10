const { Videogame } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { api_key } = process.env;

const createVideogame = async (
  name,
  description,
  platforms,
  image,
  released,
  rating
) => {
  return await Videogame.create({
    name,
    description,
    platforms,
    image,
    released,
    rating,
  });
};

const getVideogameById = async (id, source) => {
  const videogame =
    source === "bdd"
      ? await Videogame.findByPk(id)
      : (
          await axios.get(
            `https://api.rawg.io/api/games/${id}?key=e690bf1004dc4a7ba04b90e436301b50`
          )
        ).data;

  //TOBE: clean correctly
  //const cleanVideogame = source === "api" ? cleanArray(videogame) : videogame;
  if (!videogame) throw new Error("El videojuego no existe");

  return videogame;
};

const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      name: elem?.name,
      description: elem?.description,
      platforms: elem?.platforms,
      image: elem?.image,
      released: elem?.released,
      rating: elem?.rating,
      created: false,
    };
  });
  return clean;
};

const getAll = async () => {
  let games = [];

  for (let page = 1; page <= 5; page++) {
    let response = (
      await axios.get(
        `https://api.rawg.io/api/games?key=e690bf1004dc4a7ba04b90e436301b50&page=${page}`
      )
    ).data.results;

    games.push(response);
  }
  const finalResult = [].concat.apply([], games);
  console.log("final", finalResult.lenght);
  return finalResult;
};

const getAllVideogames = async () => {
  const bddVideogames = await Videogame.findAll();

  let apiVideogamesRow = await getAll();

  const apiVideogames = cleanArray(apiVideogamesRow);

  return [...bddVideogames, ...apiVideogames];
};

const getVideogameByName = async (name) => {
  const dbbVideogames = await Videogame.findAll({
    //Includes???
    where: {
      name,
    },
    limit: 15,
  });

  let apiVideogamesRow = await getAll();

  const apiVideogames = cleanArray(apiVideogamesRow);

  const filteredApi = apiVideogames.filter((videogame) =>
    videogame.name.includes(name)
  );

  return [...dbbVideogames, ...filteredApi];
};

module.exports = {
  createVideogame,
  getVideogameById,
  getVideogameByName,
  getAllVideogames,
};
