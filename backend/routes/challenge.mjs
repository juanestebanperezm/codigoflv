import { Router } from "express";
import { body, param } from "express-validator";

//Controladores
import {
  addChallenge,
  viewOneChallenge,
  getChallenges,
  deleteChallenge,
  editChallenge,
} from "../controllers/challenge.mjs";
import { validateChallengeID } from "../database/challenge-validators.mjs";
import { validateErrors } from "../middlewares/validate-errors.mjs";

/*Router de los retos*/
const challengerouter = Router();

/*Obtener todos los retos*/
challengerouter.get("/", getChallenges);

/*Obtener reto por id*/
challengerouter.get(
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
  viewOneChallenge
);

/*Añadir un reto*/
challengerouter.post(
  "/",
  [
    body("title", "El título del reto es obligatorio").notEmpty(),
    body("description", "La descripción del reto es obligatoria").notEmpty(),
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
  addChallenge
);

/*Borrar un reto por id*/
router.delete(
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
challengerouter.put(
  "/:id",
  [
    param(
      "id",
      "El id del reto a borrar es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateChallengeID),
    body("title", "El título del reto es obligatorio").notEmpty(),
    body("description", "La descripción del reto es obligatoria").notEmpty(),
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
  editChallenge
);

export default challengerouter;
