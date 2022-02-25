import { Router } from "express";

//Controladores
import { 
    addChallenge, 
    viewOneChallenge,
    viewChallenge } from "../controllers/challenge.mjs";

/*Router de los retos*/
const router = Router();

//Gets
router.get('/retos',viewChallenge);
router.get('/retos/:id',viewOneChallenge)

//Posts
router.post('/', addChallenge);

export default router;