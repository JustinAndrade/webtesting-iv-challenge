exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('Pokemon').del().then(function() {
		// Inserts seed entries
		return knex('Pokemon').insert([
			{ id: 1, name: 'Bulbasaur' },
			{ id: 2, name: 'Squirtle' },
			{ id: 3, name: 'Charmander' }
		]);
	});
};
