import { Router } from "express";

import { addChallenge } from "../controllers/challenge.mjs";

/*Router de los retos*/
const router = Router();

router.get('/', addChallenge);


export default router;