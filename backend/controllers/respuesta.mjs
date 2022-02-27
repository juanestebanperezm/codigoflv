import Respuesta from "../modelos/Respuestas.mjs";

//Middleware para añadir una respuesta
const addRespuesta = async (req, res) => {
  try {
    const { id_usuario, id_pregunta, language, argumento, codigo } = req.body;
    const respuesta = new Respuesta({
      id_usuario,
      id_pregunta,
      language,
      argumento,
      codigo,
    });
    await respuesta.save();

    return res.status(201).send({
      ok: true,
      msg: "Estamos coronando HP!",
      respuesta,
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
const getRespuestas = async (req, res) => {
  try {
    const { limit = 30, skip = 0 } = req.query;
    const [totalrespuesta, respuestas] = await Promise.all([
      Respuesta.countDocuments(),
      Respuesta.find()
        .limit(+limit)
        .skip(+skip),
    ]);

    return res.status(200).json({
      ok: true,
      total: totalChallenges,
      respuestas,
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
const viewOneRespuesta = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await Respuesta.findById(id);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "¿Nos parecemos a Bancolombia? pues obvio, mantenemos caidos",
      error,
    });
  }
};

// Eliminar Respuesta
const deleteRespuesta = async (req, res) => {
  try {
    const { id } = req.params;
    const reto = await Respuesta.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "Respuesta eliminada",
      reto,
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

const editRespuesta = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_usuario, id_pregunta, language, argumento, codigo } = req.body;
    const dbRespuesta = await Respuesta.findByIdAndUpdate(
      id,
      { $set: { id_usuario, id_pregunta, language, argumento, codigo } },
      { returnOriginal: false }
    );

    res.status(200).json({
      ok: true,
      msg: "Respuesta actualizado",
      respuesta: dbRespuesta,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "El sistema está caído: estoy agarrando señal carnal",
      error,
    });
  }
};

export {
  addRespuesta,
  getRespuestas,
  viewOneRespuesta,
  deleteRespuesta,
  editRespuesta,
};
