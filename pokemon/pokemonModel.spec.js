const request = require('supertest');

const server = require('../api/server.js');
const db = require('../database/dbConfig.js');
const Pokemon = require('./pokemonModel.js');

describe('pokemonModel.js', () => {
	it('should get all Pokemon', () => {
		const pokemon = Pokemon.findAll();

		expect(pokemon).toHaveLength(3);
	});
});
