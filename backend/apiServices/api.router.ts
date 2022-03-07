import { Router } from "express";
import { helloWorld } from './api.controller';

const apiRouter = Router();

apiRouter.get("/", helloWorld)

export default apiRouter;
