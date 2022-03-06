import app from '../index';
import request from "supertest";

// Group test usin describe
describe("POST /users/register", () => {
	it ('Returns status code 201 if first name is passed', async () => {
		const res = await request(app)
		.post("/users/register")
		.send({
			name: {
				first: 'jean',
				last: 'dev'
			}, 
			email: 'admin@admin.com',
			password: '1234567',
			repeat_password: '1234567'
		})
		// toEqual recursively checks every field of an object or array.
		expect(res.statusCode).toEqual(201);
	})
})
