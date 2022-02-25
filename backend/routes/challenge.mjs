import { Router } from "express";

//Controladores
import { addChallenge } from "../controllers/challenge.mjs";
import { viewChallenge } from "../controllers/challenge.mjs";

/*Router de los retos*/
const router = Router();

//Gets
router.get('/retos',viewChallenge);

//Posts
router.post('/', addChallenge);

export default router;