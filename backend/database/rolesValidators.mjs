import Role from "../models/roles.mjs";

/**
 * @param {String} name - Nombre del rol
 * @returns - Error si el el correo electrónico existe, de lo contrario continua el flujo
 */
const findExistingRole = async (name) => {
    try {
        name = name.toUpperCase();
        const dbRole = await Role.findOne({ name });

        if (dbRole) {
            throw new Error(`El rol ${name} ya existe.`);
        }

        return true;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export {
    findExistingRole
}