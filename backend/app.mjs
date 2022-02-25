import dotenv from 'dotenv';

import AppServer from "./models/server.mjs";

dotenv.config();

const server = new AppServer();
server.listen();