const db = require('../database/dbConfig.js');

module.exports = {
	add,
	findAll
};

async function add(pokemon) {
	const [ id ] = await db('Pokemon').insert(pokemon);
}

function findAll() {
	return db('Pokemon');
}

function findById() {
	return db('Pokemon').where({ id }).first();
}
