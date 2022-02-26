import { Router } from "express";

//Controladores
import { addChallenge, viewOneChallenge ,getChallenges ,deleteChallenge } from "../controllers/challenge.mjs";

/*Router de los retos*/
const router = Router();

/*Obtener todos los retos*/
router.get('/', getChallenges);

/*Obtener reto por id*/
router.get('/:id', viewOneChallenge);

/*Añadir un reto*/
router.post('/', addChallenge);

/*Borrar un reto por id*/
router.delete('/:id', deleteChallenge);

export default router;