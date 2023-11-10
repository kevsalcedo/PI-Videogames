import axios from "axios";
import { GET_VIDEOGAMES, GET_VIDEOGAME, FILTER, ORDER } from "./actions-types";

export const getVideogames = () => {
  return async (dispatch) => {
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
    console.log("videogames", finalResult);
    dispatch({ type: GET_VIDEOGAMES, payload: finalResult });
  };
};

export const getVideogame = (id) => {
  return async (dispatch) => {
    let response = (
      await axios.get(
        `https://api.rawg.io/api/games/${id}?key=e690bf1004dc4a7ba04b90e436301b50`
      )
    ).data;

    dispatch({ type: GET_VIDEOGAME, payload: response });
  };
};

export const filterCards = (genres) => {
  return { type: FILTER, payload: genres };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
