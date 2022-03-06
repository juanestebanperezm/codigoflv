import dotenv from 'dotenv'
import { AppServer } from "./bin/server";


dotenv.config();
const app = new AppServer(3000);
app.listen();

export default app;
