const { Router } = require("express");
const {
  getVideogamesHandler,
  getVideogameHandler,
  createVideogameHandler,
} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

const videogameValidate = (req, res, next) => {
  const { name, description, platforms, image, released, rating } = req.body;
  if(!name) return res.status(400).json({error: "Missing name"});
  if(!description) return res.status(400).json({error: "Missing description"});
  if(!platforms) return res.status(400).json({error: "Missing platforms"});
  if(!image) return res.status(400).json({error: "Missing image"});
  if(!released) return res.status(400).json({error: "Missing released"});
  if(!rating) return res.status(400).json({error: "Missing rating"});

  next();
};

videogamesRouter.get("/", getVideogamesHandler);

videogamesRouter.get("/:id", getVideogameHandler);

videogamesRouter.post("/", videogameValidate, createVideogameHandler);

module.exports = videogamesRouter;
