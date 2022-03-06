import express, { Application } from 'express';
import morgan from 'morgan';

export class AppServer {
	private app: Application;
	private paths: {
		challenges: string;
		users: string;
		competencies: string;
		answers: string;
		roles: string;
	}
	constructor(private port?: number | string) {
		// Express
		this.app = express();

		// Endpoints 
		this.paths = {
			challenges: "/challenges",
			users: "/users",
			competencies: "/competencies",
			answers: "/answers",
			roles: "/roles"
		};

		// Settings
		this.settings();

		// Middlewares
		this.middlewares();

		// Routes
		this.routes();
	}

	settings() {
		this.app.set('port', this.port || process.env.PORT || 8080);
	}

	middlewares() {
		this.app.use(morgan('dev'));
	}

	routes() {
    this.app.use(this.paths.users, usersRouter);
	}

	listen() {
		this.app.listen(this.app.get('port'), () => {
			console.log('Server on port', this.app.get('port'));
		});
	}

	getApp() {
		return this.app;
	}
}

