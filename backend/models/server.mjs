import express from "express";
import morgan from "morgan";
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userRouter from "../routes/user.mjs";
import main from "../database/config.mjs";

class AppServer {

    constructor() {
        this.app = express();
        this.paths = {
            users:'/users',
        }

        this.port = process.env.PORT || 8080;

        // Database connection
        this.databaseConnection();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

        // Sockets
    }

    middlewares() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        this.app.use(cors());
        this.app.use(morgan('tiny')); 
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:true }));
        this.app.use(express.static(path.join(__dirname, '../public')));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }

    routes() {
        this.app.use(this.paths.users, userRouter);
    }


    async databaseConnection() {
        await main();
    }

}

export default AppServer;