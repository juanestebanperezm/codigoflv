import Respuesta from "../modelos/Respuestas.mjs";
import Reto from "../modelos/Respuestas.mjs";

/**
 * @param {String} id - Identificador de la respuesta
 * @returns - Error si el id de la respuesta no existe, de lo contrario sigue el flujo
 */
const validateRespuestaID = async (id) => {
  try {
    const dbRespuesta = await Respuesta.findById(id);

    if (!dbRespuesta) {
      throw new Error(`La respuesta con id ${id} no existe`);
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export { validateRespuestaID };
