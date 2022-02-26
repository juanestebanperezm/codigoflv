import { Router } from "express";
import { param } from 'express-validator';

//Controladores
import { addChallenge, viewOneChallenge ,getChallenges ,deleteChallenge } from "../controllers/challenge.mjs";
import { validateChallengeID } from "../database/challenge-validators.mjs";
import { validateErrors } from "../middlewares/validate-errors.mjs";

/*Router de los retos*/
const router = Router();

/*Obtener todos los retos*/
router.get('/', getChallenges);

/*Obtener reto por id*/
router.get('/:id', [
    param('id','El id del reto a obtener es obligatorio y debe ser un id de mongo.').isMongoId().custom(validateChallengeID),
    validateErrors
] , viewOneChallenge);


/*Añadir un reto*/
router.post('/', addChallenge);

/*Borrar un reto por id*/
router.delete('/:id', [
    param('id', 'El id del reto a borrar es obligatorio y debe ser un id de mongo.').isMongoId().custom(validateChallengeID),
    validateErrors
], deleteChallenge);

export default router;