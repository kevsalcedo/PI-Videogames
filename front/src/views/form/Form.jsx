import React from "react";
import { useEffect, useState } from "react";

const Form = () => {
  const [newVideogame, setNewVideogame] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    released: "",
    rating:"",
    genres: "",
  });

  const handleChange = (event) => {
    setNewVideogame({
        ...newVideogame,
        [event.target.name]: event.target.value
    });
  }

  return (
    <form>
      <br/>
      <div>
        <label>Name: </label>
        <input type="text" value={newVideogame.name} onChange={handleChange} name="name"/>
      </div>

      <br/>

      <div>
        <label>Image: </label>
        <input type="url" value={newVideogame.image} onChange={handleChange} name="image"/>
      </div>

      <br/>
      
      <div>
        <label>Descripción: </label>
        <input type="text" value={newVideogame.description} onChange={handleChange} name="description"/>
      </div>

      <br/>
      
      <div>
        <p> Platforms: <br/>
          <label><input type="checkbox" name="cb-pc"/> PC </label><br/>
          <label><input type="checkbox" name="cb-ps5"/> PlayStation 5 </label><br/>
          <label><input type="checkbox" name="cb-ps4"/> PlayStation 4 </label><br/>
          <label><input type="checkbox" name="cb-xboxone"/> Xbox One </label><br/>
          <label><input type="checkbox" name="cb-xboxseries"/> Xbox Series S/X </label><br/>
          <label><input type="checkbox" name="cb-switch"/> Nintendo Switch </label><br/>
          <label><input type="checkbox" name="cb-ios"/> iOS </label><br/>
          <label><input type="checkbox" name="cb-android"/> Android </label><br/>
          <label> Other platform? </label>
          <input type="text" value={newVideogame.platforms} onChange={handleChange} name="platforms"/>
        </p>
      </div>

      <br/>

      <div>
        <label>Release date: </label>
        <input type="date" value={newVideogame.released} onChange={handleChange} name="released"/>
      </div>

      <br/>

      <div>
        <label>Rating: </label>
        <input type="number" value={newVideogame.rating} onChange={handleChange} name="rating"/>
      </div>
      
      <br/>

      <div>
        <p> Genres: <br/>
          <label><input type="checkbox" name="cb-action"/> Action </label><br/>
          <label><input type="checkbox" name="cb-arcade"/> Arcade </label><br/>
          <label><input type="checkbox" name="cb-adventure"/> Adventure </label><br/>
          <label><input type="checkbox" name="cb-rpg"/> RPG </label><br/>
          <label><input type="checkbox" name="cb-strategy"/> Strategy </label><br/>
          <label><input type="checkbox" name="cb-shooter"/> Shooter </label><br/>
          <label><input type="checkbox" name="cb-puzzle"/> Puzzle </label><br/>
          <label><input type="checkbox" name="cb-multiplayer"/> Massively Multiplayer </label><br/>
          <label><input type="checkbox" name="cb-racing"/> Racing </label><br/>
          <label><input type="checkbox" name="cb-sports"/> Sports </label><br/>
          <label> Other genre? </label>
          <input type="text" value={newVideogame.genres} onChange={handleChange} name="genres"/>
        </p>
      </div>

      <br/>
      
      <button type="submit">Create Videogame</button>
    </form>
  );
};

export default Form;
