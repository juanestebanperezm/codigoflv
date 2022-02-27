import { Router } from "express";
import { body, param } from "express-validator";

/*controladores*/
import {
  addRespuesta,
  viewOneRespuesta,
  getRespuestas,
  deleteRespuesta,
  editRespuesta,
} from "../controllers/Respuesta.mjs";
import { validateRespuestaID } from "../database/respuesta-validador.mjs";
import { validateErrors } from "../middlewares/validate-errors.mjs";

/*Router de los retos*/
const respuestaRouter = Router();

/*Obtener todos los retos*/
respuestaRouter.get("/", getRespuestas);

/*Obtener reto por id*/
respuestaRouter.get(
  "/:id",
  [
    param(
      "id",
      "El id del reto a obtener es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateRespuestaID),
    validateErrors,
  ],
  viewOneRespuesta
);

/*Añadir una respuesta*/
respuestaRouter.post(
  "/",
  [
    body("id_usuario", "El id de usuario es obligatori").notEmpty(),
    body("id_pregunta", "El id de la pregunta es obligatorio").notEmpty(),
    body(
      "language",
      "El lenguaje al que pertenece la respuesta es obligatorio"
    ).isIn(["javascript", "python"]),
    body(
      "argiumento",
      "El argumento de la respuesta es obligatoria"
    ).notEmpty(),
    body(
      "argiumento",
      "El codigo que corresponde a la respuesta es obligatoria"
    ).notEmpty(),
    validateErrors,
  ],
  addRespuesta
);

/*Borrar una respuesta por id*/
respuestaRouter.delete(
  "/:id",
  [
    param(
      "id",
      "El id de la respuesta a borrar es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateRespuestaID),
    validateErrors,
  ],
  deleteRespuesta
);

// /*Editar un por id*/
respuestaRouter.put(
  "/:id",
  [
    param(
      "id",
      "El id del reto a borrar es obligatorio y debe ser un id de mongo."
    )
      .isMongoId()
      .custom(validateRespuestaID),
    body("id_usuario", "El id de usuario es obligatori").notEmpty(),
    body("id_pregunta", "El id de la pregunta es obligatorio").notEmpty(),
    body(
      "language",
      "El lenguaje al que pertenece la respuesta es obligatorio"
    ).isIn(["javascript", "python"]),
    body(
      "argiumento",
      "El argumento de la respuesta es obligatoria"
    ).notEmpty(),
    body(
      "argiumento",
      "El codigo que corresponde a la respuesta es obligatoria"
    ).notEmpty(),
    validateErrors,
  ],
  editRespuesta
);

export default respuestaRouter;
