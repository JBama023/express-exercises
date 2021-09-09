const PORT = 3001;
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cities = [
{cityName: "Boston", continent: "North America"},
{cityName: "Mobile", continent: "North America"},
{cityName: "London", continent: "Europe"},
{cityName: "Bangkok", continent: "Asia"},
{cityName: "Cape Town", continent: "Africa"},
{cityName: "Buenos Aires", continent: "South America"},
{cityName: "Sydney", continent: "Australia"},
{cityName: "Paris", continent: "Europe"},
{cityName: "Mexico City", continent: "South America"},
{cityName: "Lagos", continent: "Africa"}];

const jimbles = [{name: "Jamie", city: "Houston", state: "Texas"}];

const movieList = [
    {movieName: "The Dark Knight", poster: 'https://images-na.ssl-images-amazon.com/images/I/91ebheNmoUL._RI_.jpg'},
    {movieName: "The Truman Show", poster: 'https://m.media-amazon.com/images/I/91QkSivUP9L._SL1500_.jpg'},
    {movieName: "Star Wars: The Empire Stikes Back", poster: 'https://images-na.ssl-images-amazon.com/images/I/91zz3a+YJ-L.jpg'},
    {movieName: "Spider-man", poster: 'https://images.moviesanywhere.com/e84b2c6e0de5278f8a00a8fedf73d60b/367910a3-05da-4ad5-8ef3-317708a1ca48.jpg'},
    {movieName: "Get Out", poster: 'https://m.media-amazon.com/images/I/51OWh1KZXWL.jpg'}]

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


// Write your routes between the ***

// ***

app.get("/good", (req, res) => {
    res.send("Lookin good!")
});

app.get("/work", (req, res) => {
    res.send("Keep up the great work!")
});

app.get("/", (req, res) => {
    res.send("Node and express are just lovely")
});

app.get('/cities', (req, res) => {
    res.render('home', {
        locals: {
            cities
        },
    });
});

app.get('/nowork', (req, res) => {
    res.status(400).send("This is an invalid route");
});

app.get('/jamieinfo', (req, res) => {
    res.render('jamie', {
        locals: {
            jimbles
        },
    });
});

app.get('/movies', (req, res) => {
    res.render('movies', {
        locals: {
            movieList
        },
    });
});

// ***

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});