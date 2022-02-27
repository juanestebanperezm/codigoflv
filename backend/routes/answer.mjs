import { Router } from "express";
import { body, param } from "express-validator";

/*controladores*/
import {
  addAnswer,
  viewOneAnswer,
  getAnswers,
  deleteAnswer,
  editAnswer,
} from "../controllers/answer.mjs";
import { validateAnswerID } from "../database/answerValidador.mjs";
import { validateErrors } from "../middlewares/validateErrors.mjs";

/*Router de los retos*/
const answerRouter = Router();

/*Obtener todos los retos*/
answerRouter.get("/", getAnswers);

/*Obtener reto por id*/
answerRouter.get(
  "/:id",
  [
    param(
      "id",
      "El id del reto a obtener es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateAnswerID),
    validateErrors,
  ],
  viewOneAnswer
);

/*Añadir una respuesta*/
answerRouter.post(
  "/",
  [
    body("id de usuario", "El id de usuario es obligatori").notEmpty(),
    body("id de pregunta", "El id de la pregunta es obligatorio").notEmpty(),
    body(
      "language",
      "El lenguaje al que pertenece la respuesta es obligatorio"
    ).isIn(["javascript", "python"]),
    body("argumento", "El argumento de la respuesta es obligatoria").notEmpty(),
    body(
      "codigo",
      "El codigo que corresponde a la respuesta es obligatoria"
    ).notEmpty(),
    validateErrors,
  ],
  addAnswer
);

/*Borrar una respuesta por id*/
answerRouter.delete(
  "/:id",
  [
    param(
      "id",
      "El id de la respuesta a borrar es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateAnswerID),
    validateErrors,
  ],
  deleteAnswer
);

// /*Editar un por id*/
answerRouter.put(
  "/:id",
  [
    param(
      "id",
      "El id del reto a borrar es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateAnswerID),
    body("id Usuario", "El id de usuario es obligatori").notEmpty(),
    body("id de pregunta", "El id de la pregunta es obligatorio").notEmpty(),
    body(
      "language",
      "El lenguaje al que pertenece la respuesta es obligatorio"
    ).isIn(["javascript", "python"]),
    body("argumento", "El argumento de la respuesta es obligatoria").notEmpty(),
    body(
      "codigo",
      "El codigo que corresponde a la respuesta es obligatoria"
    ).notEmpty(),
    validateErrors,
  ],
  editAnswer
);

export default answerRouter;
