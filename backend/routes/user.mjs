import { Router } from "express";
import { body } from "express-validator";

import { createUser, userLogin, getUsers } from "../controllers/user.mjs";
import { findExistingUsedEmail, validateEmailAndPassword } from "../database/userValidators.mjs";
import { validateErrors } from "../middlewares/validateErrors.mjs";

// Router
const usersRouter = Router();

// Obtener todos los usuarios
usersRouter.get("/", getUsers);

// Registro usuario
usersRouter.post("/", [
    body('name.first','Los nombres son obligatorios').notEmpty(),
    body('name.last','Los apellidos son obligatorios').notEmpty(),
    body('email','El correo electrónico es obligatorio').isEmail().custom(findExistingUsedEmail),
    body('password','La contraseña es obligatoria, el mínimo de caracteres es 6').isLength(6),
    body('repeat_password','Repetir contraseña debe ser igual a contraseña').exists().custom((repeat_password, { req }) => repeat_password === req.body.password),
    validateErrors
], createUser);

// Iniciar sesión
usersRouter.post('/login', [
    body('email','El correo electrónico es obligatorio').isEmail(),
    body('password','La contraseña es obligatoria').notEmpty(),
    validateErrors,
    validateEmailAndPassword
], userLogin);

export default usersRouter;
