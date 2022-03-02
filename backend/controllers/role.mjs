import Role from "../models/roles.mjs";

/**
 * Middleware para crear un rol
 */
const createRole = async (req, res) => {
    try {
        const { name } = req.body;
        const role = new Role({ name });
        await role.save();
        return res.status(201).json({
            ok:true,
            msg:'Rol creado',
            role
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:'Tengo pereza de escribir esto, hable con el admin',
            error
        });
    }
}

export {
    createRole
}