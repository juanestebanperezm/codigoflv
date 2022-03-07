import { app, server } from '../index';
import request from 'supertest';

describe('POST /auth/register', () => {
	test('should return 200', async () => {
		const data = {
			name: {
				first: 'jean',
				last: 'dev'
			},
			email: 'admin@admin.com',
			password: '12345678',
			repeat_password: '12345678'
		}
		const res = await request(app).get('/auth/register').send(data)
		expect(res.body.ok).toEqual(true);
		expect(res.statusCode).toBe(201);
	})
	test('should return 400 when some data missing', async () => {
		const data = {
			name: {
				first: 'jean',
				last: 'dev'
			},
			email: '',
			password: '12345678',
			repeat_password: '12345678'
		}
		const res = await request(app).get('/auth/register').send(data)
		expect(res.body.msg).toContainEqual('correo electrónico es obligatorio')
		expect(res.statusCode).toBe(400);
	})
})

describe('POST /auth/login', () => {
	test('should return 200', async () => {
		const data = { email: 'admin@admin.com', password:'12345678' }
		const res = await request(app).get('/auth/login').send(data)
		expect(res.body.ok).toEqual(true);
		expect(res.statusCode).toBe(200);
	})
	test('should return 400', async () => {
		const data = { email: 'admin@admin.com', password: '123422451' }
		const res = await request(app).get('/auth/login').send(data)
		expect(res.body.ok).toEqual(false);
		expect(res.statusCode).toBe(400);
	})
})
afterAll(() => {
	server.close();
})
