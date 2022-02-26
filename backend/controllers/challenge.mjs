import Reto from "../modelos/Retos.mjs";

//Middleware para añadir un reto
const addChallenge = async (req, res) => {
  try {
    const { title, description, language, dificultad } = req.body;
    const reto = new Reto({ title, description, language, dificultad });
    await reto.save();

    return res.status(201).send({
      ok:true,
      msg:"Estamos coronando HP!",
      reto
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
    const [totalChallenges, challenges] = await Promise.all([Reto.countDocuments(), Reto.find().limit(+limit).skip(+skip)]);
    
    return res.status(200).json({
      ok:true,
      total:totalChallenges,
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
    const reto = await Reto.findById(id);
    res.status(200).json(reto);
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
      const findRetoAndDelete = await Reto.findByIdAndDelete(id);

      res.status(200).json({
        ok:true,
        msg:'Reto eliminado',
        findRetoAndDelete
      });

  } catch (error) {

    res.status(500).json({
      ok: false,
      msg: "El sistema está caído: estoy agarrando señal carnal",
      error
    })
  }
};


// Editar Reto

const editChallenge =  async (req, res) => {
  try {

    const { id } = req.params;
    const { title, description, language, dificultad} = req.body;
    const dbChallenge = await Reto.findByIdAndUpdate(id, {$set: { title, description, language, dificultad }}, { returnOriginal:false } ,);
    
    res.status(200).json({
      ok:true,
      msg:'Reto actualizado',
      challenge:dbChallenge
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "El sistema está caído: estoy agarrando señal carnal",
      error
    })
  }
}


export { addChallenge, getChallenges, viewOneChallenge, deleteChallenge, editChallenge };
