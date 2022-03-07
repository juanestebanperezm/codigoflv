import express, { Application } from 'express';
import morgan from 'morgan';

// Enrutador
import apiRouter from '../apiServices/api.router';

export class AppServer {
	private app: Application;
	private paths: {
		challenges: string;
		users: string;
		competencies: string;
		answers: string;
		roles: string;
		api: string
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
			roles: "/roles",
			api: "/"
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
		this.app.use(this.paths.api, apiRouter)
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

