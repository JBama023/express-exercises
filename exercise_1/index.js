const PORT = 3000;
const express = require("express");
const app = express();


app.post("/", (req, res) => {
    res.send("Why hello there!")
});

app.post("/@", (req, res) => {
    res.send("🥭 is 🔥")
});

app.post("/ifigureditout", (req, res) => {
    res.send("I wonder what's wrong with this route 🤔?")
});

app.get("/happy", (req, res) => {
    res.send("Happy 🐶 loves yummy dog food!")
});

app.post("/fruitsmoothie", (req, res) => {
    res.send("A 🥭, 🍍, 🍓 make a wonderful smoothie!")
});

app.listen(PORT, console.log(`Listening on port ${PORT}`)
);