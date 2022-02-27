import Reto from "../models/retos.mjs";

/**
 * @param {String} id - Identificador del usuario
 * @returns - Error si el id del usuario no existe, de lo contrario sigue el flujo
 */
const validateChallengeID = async (id) => {
  try {
    const dbReto = await Reto.findById(id);

    if (!dbReto) {
      throw new Error(`El reto con id ${id} no existe`);
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export { validateChallengeID };
