import Answer from "../models/answer.mjs";

/**
 * @param {String} id - Identificador de la respuesta
 * @returns - Error si el id de la respuesta no existe, de lo contrario sigue el flujo
 */
const validateAnswerID = async (id) => {
  try {
    const dbAnswer = await Answer.findById(id);

    if (!dbAnswer) {
      throw new Error(`La respuesta con id ${id} no existe`);
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export { validateAnswerID };
