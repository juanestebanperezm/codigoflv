import dotenv from 'dotenv'
import { AppServer } from "./bin/server";


dotenv.config();
export const app = new AppServer(3000).getApp();
export const server = app.listen();

