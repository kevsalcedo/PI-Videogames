import React from "react";
import CardContainer from "../../components/cardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import { useState } from "react"
import { orderCards, filterCards } from "../../redux/actions/actions";

const Home = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, []);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <h1>Home</h1>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Decendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Sports">Sports</option>
        <option value="Shooter">Shooter</option>
      </select>
      <CardContainer />
    </>
  );
};

export default Home;
