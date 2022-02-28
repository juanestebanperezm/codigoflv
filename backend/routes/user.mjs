import { Router } from "express";
import { body } from "express-validator";

import { addUser, viewUsers } from "../controllers/user.mjs";
import { findExistingEmail } from "../database/userValidators.mjs";
import { validateErrors } from "../middlewares/validateErrors.mjs";

//Router
const usersRouter = Router();

//Gets
usersRouter.get("/", viewUsers);

//Post
usersRouter.post("/", [
    body('name.first','Los nombres son obligatorios').notEmpty(),
    body('name.last','Los apellidos son obligatorios').notEmpty(),
    body('email','El correo electrónico es obligatorio').isEmail().custom(findExistingEmail),
    body('password','La contraseña es obligatoria, el mínimo de caracteres es 6').isLength(6),
    body('repeat_password','Repetir contraseña debe ser igual a contraseña').exists().custom((repeat_password, { req }) => repeat_password === req.body.password),
    validateErrors
], addUser);

export default usersRouter;
