import User from "../models/user.mjs";

/**
 * Middleware para verificar que el token enviado por el usuario sea válido
 * @returns - Error si no lo es, de lo contrario continua el flujo
 */
const verifyToken = (req,res,next) => {
    try {
        const token = req.header('codigosancocho-token');
        // Se verifica que el token venga en la petición

        if ( !token ) {
            return res.status(401).json({
                ok: false,
                msg:'No se encontró el token en la petición'
            });
        }
        // Se desestructura el id del usuario
        const { uid } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const authenticatedUser = await User.findById(uid);
        
        if (!authenticatedUser) {
            return res.status(404).json({
                ok:false,
                msg:`El usuario con id ${ uid } no ha sido encontrado`,
            });
        }

        if (!authenticatedUser.status) {
            return res.status(400).json({
                ok:false,
                msg:`El usuario con id ${ uid } se encuentra con estado inactivo, habla con el administrador para solucionar esto`,
            }); 
        }
        
        req.authenticatedUser = authenticatedUser;
        next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok:false,
            msg:'El token no es valido'
        });
    }    
}

export { verifyToken }