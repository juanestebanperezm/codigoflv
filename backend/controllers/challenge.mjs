import Challenge from "../models/challenge.mjs";

//Middleware para añadir un reto
const addChallenge = async (req, res) => {
  try {
    const { title, description, language, difficulty } = req.body;
    const reto = new Challenge({ title, description, language, difficulty });
    await reto.save();

    return res.status(201).send({
      ok: true,
      msg: "Estamos coronando HP!",
      reto,
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

//Ver todos los retos
const getChallenges = async (req, res) => {
  try {
    const { limit = 30, skip = 0 } = req.query;
    const [totalChallenges, challenges] = await Promise.all([
      Challenge.countDocuments(),
      Challenge.find()
        .limit(+limit)
        .skip(+skip),
    ]);

    return res.status(200).json({
      ok: true,
      total: totalChallenges,
      challenges,
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

//Ver un solo reto
const viewOneChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const dbChallenge = await Challenge.findById(id);
    return res.status(200).json({
      ok:true,
      challenge:dbChallenge
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "¿Nos parecemos a Bancolombia? pues obvio, mantenemos caidos",
      error,
    });
  }
};

// Eliminar Reto
const deleteChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const findRetoAndDelete = await Challenge.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      msg: "Reto eliminado",
      findRetoAndDelete,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "El sistema está caído: estoy agarrando señal carnal",
      error,
    });
  }
};

// Editar Reto

const editChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, language, difficulty } = req.body;
    const dbChallenge = await Challenge.findByIdAndUpdate(
      id,
      { $set: { title, description, language, difficulty } },
      { returnOriginal: false }
    );

    res.status(200).json({
      ok: true,
      msg: "Reto actualizado",
      challenge: dbChallenge,
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
  addChallenge,
  getChallenges,
  viewOneChallenge,
  deleteChallenge,
  editChallenge,
};
