import { Router } from "express";
import { body, param } from "express-validator";

//Controladores
import {
  createChallenge,
  getSingleChallenge,
  getChallenges,
  deleteChallenge,
  updateChallenge,
} from "../controllers/challenge.mjs";
import { validateChallengeID } from "../database/challengeValidators.mjs";
import { validateErrors } from "../middlewares/validateErrors.mjs";

/*Router de los retos*/
const challengeRouter = Router();

/*Obtener todos los retos*/
challengeRouter.get("/", getChallenges);

/*Obtener reto por id*/
challengeRouter.get(
  "/:id",
  [
    param(
      "id",
      "El id del reto a obtener es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateChallengeID),
    validateErrors,
  ],
  getSingleChallenge
);

/*Añadir un reto*/
challengeRouter.post(
  "/",
  [
    body("titulo", "El título del reto es obligatorio").notEmpty(),
    body("descripción", "La descripción del reto es obligatoria").notEmpty(),
    body(
      "language",
      "El lenguaje al que pertenece este reto es obligatorio"
    ).isIn(["javascript", "python"]),
    body("dificultad", "La dificultad del reto es obligatoria").isIn([
      "facil",
      "medio",
      "dificil",
      "modoJH",
    ]),
    validateErrors,
  ],
  createChallenge
);

/*Borrar un reto por id*/
challengeRouter.delete(
  "/:id",
  [
    param(
      "id",
      "El id del reto a borrar es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateChallengeID),
    validateErrors,
  ],
  deleteChallenge
);

// /*Editar un por id*/
challengeRouter.put(
  "/:id",
  [
    param(
      "id",
      "El id del reto a borrar es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateChallengeID),
    body("titletitulo", "El título del reto es obligatorio").notEmpty(),
    body("descripción", "La descripción del reto es obligatoria").notEmpty(),
    body(
      "language",
      "El lenguaje al que pertenece este reto es obligatorio"
    ).isIn(["javascript", "python"]),
    body("dificultad", "La dificultad del reto es obligatoria").isIn([
      "facil",
      "medio",
      "dificil",
      "modoJH",
    ]),
    validateErrors,
  ],
  updateChallenge
);

export default challengeRouter;
