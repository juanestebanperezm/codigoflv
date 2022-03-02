import { Router } from "express";
import { body } from "express-validator";

import { createRole } from "../controllers/role.mjs";
import { findExistingRole } from "../database/rolesValidators.mjs";
import { validateRole } from "../middlewares/validate-role.mjs";
import { validateErrors } from "../middlewares/validateErrors.mjs";
import { verifyToken } from "../middlewares/verify-token.mjs";

// Router
const rolesRouter = Router();

// Registro de rol
rolesRouter.post("/", [
    verifyToken,
    validateRole('ADMIN'),
    body('name', 'El nombre del nuevo rol es obligatorio').notEmpty().custom(findExistingRole),
    validateErrors
], createRole);

export default rolesRouter;
