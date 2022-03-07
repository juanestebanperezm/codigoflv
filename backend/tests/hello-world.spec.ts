import {app, server} from '../index';
import request from 'supertest';

describe('GET /', () => {
	test('should return 200', async () => {
		const res = await request(app).get('/')
		expect(res.statusCode).toBe(200);
	})
})

afterAll(() => {
	server.close();
})
