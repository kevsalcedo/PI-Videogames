const { Router } = require('express');

// Import routers.
const videogamesRouter = require("./videogamesRouter");
const genresRouter = require("./genresRouter");

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);


module.exports = router;
