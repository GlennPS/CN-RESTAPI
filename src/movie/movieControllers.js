const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body); //Movie.create is creating a database
        res.status(200).send({movie: newMovie});    //adding a status code into a response
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message})
    }
}

exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({err: error.message});
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message});
    }
};
