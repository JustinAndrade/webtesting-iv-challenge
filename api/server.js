const express = require('express');

const Pokemon = require('../pokemon/pokemonModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Pokemon API is up!' });
});

server.get('/pokemon', (req, res) => {
	Pokemon.findAll()
		.then((pokemon) => {
			res.status(200).json(pokemon);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = server;
