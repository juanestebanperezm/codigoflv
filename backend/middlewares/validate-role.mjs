/**
 * Middleware para validar que el usaurio cumpla el rol
 * @param  {Array} roles Roles
 */
const validateRole = (...roles) => {
    return async (req, res, next) => {
        try {
            if (!req.authenticatedUser) {
                return res.status(400).json({
                    ok: false,
                    msg: `Se quiere validar el rol sin enviar el token primero`,
                });
            }

            if (!roles.includes(req.authenticatedUser.role)) {
                return res.status(403).json({
                    ok: false,
                    msg: `El rol/es ${roles} no te permiten realizar esta acción`
                });
            }

            next();

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Habla con el admin para que arregle esta cosa'
            });
        }
    }
}

export {
    validateRole
}