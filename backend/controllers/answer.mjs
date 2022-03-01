import Answer from "../models/answer.mjs";

//Middleware para añadir una respuesta

const createAnswer = async (req, res) => {
  try {
    const { idUser, idQuestion, language, argument, code } = req.body;
    const answer = new Answer({
      idUser,
      idQuestion,
      language,
      argument,
      code,
    });
    await answer.save();

    return res.status(201).send({
      ok: true,
      msg: "Estamos coronando HP!",
      answer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el que hizo esta chimbada pa que lo arregle",
      error,
    });
  }
};

//Ver todas las respuestas

const getAnswers = async (req, res) => {
  try {
    const { limit = 30, skip = 0 } = req.query;
    const [totalAnswers, answer] = await Promise.all([
      Answer.countDocuments(),
      Answer.find()
        .limit(+limit)
        .skip(+skip),
    ]);

    return res.status(200).json({
      ok: true,
      total: totalAnswers,
      answer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Mor el endpoint esta caido, estamos trabajando como burros para arreglarlo",
      error,
    });
  }
};

//Ver una sola respuesta

const getSingleAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await Answer.findById(id);
    res.status(200).json(answer);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "¿Nos parecemos a Bancolombia? pues obvio, mantenemos caidos",
      error,
    });
  }
};

// Eliminar Respuesta

const deleteAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await Answer.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "Respuesta eliminada",
      answer,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "El sistema está caído: estoy agarrando señal carnal",
      error,
    });
  }
};

// Editar Respuesta

const updateAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const { idUser, idQuestion, language, argument, code } = req.body;
    const dbAnswer = await Answer.findByIdAndUpdate(
      id,
      { $set: { idUser, idQuestion, language, argument, code } },
      { returnOriginal: false }
    );

    res.status(200).json({
      ok: true,
      msg: "Respuesta actualizado",
      answer: dbAnswer,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "El sistema está caído: estoy agarrando señal carnal",
      error,
    });
  }
};

export { createAnswer, getAnswers, getSingleAnswer, deleteAnswer, updateAnswer };
