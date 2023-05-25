/** @format */

const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;
const heroImg = require('./data/heroImg.json');
const allChefs = require('./data/chefs.json');
const chefRecipes = require('./data/recipes.json');
const userFeedback = require('./data/userFeedback.json');

app.use(cors())

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get('/hero-img', (req, res) => {
	res.send(heroImg);
});

app.get('/all-chefs', (req, res) => {
	res.send(allChefs);
})

app.get("/chef-recipes", (req, res) => {
	res.send(chefRecipes);
});

app.get('/user-feedback', (req, res) => {
	res.send(userFeedback);
})

app.get('/chef-details/:id', (req, res) => {
	const id = req.params.id;
	const selectedChef = allChefs.chefs.find(c => c._id == id);
	res.send(selectedChef);
} )


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
