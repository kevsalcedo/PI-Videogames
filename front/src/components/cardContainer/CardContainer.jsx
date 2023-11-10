import React from 'react'
import Card from "../card/Card"
import style from "./CardContainer.module.css"
import {useSelector} from "react-redux"

const CardContainer = () => {

  const videogames = useSelector(state=> state.videogames)

  return (
    <div className={style.container}>
      {videogames.map(({id, name, genres, platforms, background_image, released, rating, created}) => {
        return <Card 
          key={id}
          id={id}
          name={name}
          genres={genres}
          platforms={platforms}
          image={background_image}
          released={released}
          rating={rating}
          created={created}
        />
      })}
    </div>
  )
}

export default CardContainer