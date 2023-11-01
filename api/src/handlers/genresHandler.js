const getGenresHandler = async (req, res) => {
  
    try {
      const allGenres = await Genres.findAll();
    
      res.status(200).json(allGenres)
      
    } catch (error) {
      res.status(404).send(error.message)
    }
}

module.exports = {getGenresHandler}