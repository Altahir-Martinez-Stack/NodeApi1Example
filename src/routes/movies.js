//import express
const { Router } = require("express");
const router = Router();
const movies = require("../sample.json");
const _ = require("underscore");

//
router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  //obtengo los datos
  const { title, director, year, rating } = req.body;
  //valido los datos si no son null
  if (title && director && year && rating) {
    //genera un id con la longitud de la array + 1
    const id = movies.length + 1;
    const newMovies = { ...req.body, id };
    //se puede guardar
    movies.push(newMovies);
    res.json(movies);
  } else {
    // error
    res.status(500).json({ error: "There wass an error" });
  }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { title, director, year, rating } = req.body;
    if(title && director && year && rating)
    {
        _.each(movies, (movie, i) => {
            if (movie.id == id)
            {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({ error: "There wass an error" });
    }
});

router.delete("/:id", (req, res) => {
    const {id} = req.params;
  _.each(movies, (movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.send(movies);
});

module.exports = router;
