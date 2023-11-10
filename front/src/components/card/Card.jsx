import React from 'react'
import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({id, name, genres, image}) => {
  return (
    <div className={style.card}>
      <h2>{name}</h2>
      <img className={style.image} src={image} alt={name}/>
      <h3>Genres:</h3>
      <ul>
        {genres?.map((genre, index) => (
          <li key={index}>{genre.name}</li> // Mapea los genres aquí
        ))}
      </ul>
    </div>
  )
}

export default Card