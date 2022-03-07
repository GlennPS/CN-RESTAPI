require("./db/connection");
const express = require("express");

const movieRouter = require("./movie/movieRoutes");

const app = express();
const port = 5000;

app.use(express.json()); // this is done to parse data
app.use(movieRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
