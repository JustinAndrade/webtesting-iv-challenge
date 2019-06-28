const request = require('supertest');

const server = require('./server.js');
const db = require('../database/dbConfig.js');

describe('server.js', () => {
	it('/ should return a 200', async () => {
		// will pass is server is up
		const res = await request(server).get('/');
		expect(res.status).toBe(200);
	});
});

describe('/pokemon should return a 200', () => {
	it('should return all the pokemon', async () => {
		const res = await request(server).get('/pokemon');
		expect(res.status).toBe(200);
	});
});
