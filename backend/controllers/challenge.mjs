//Paquetes

//Modelo
import Reto from "../modelos/Retos.mjs";

//Middleware para añadir un reto
const addChallenge = async (req, res) => {
  try {
    const { title, description, language, dificultad } = req.body;
    const reto = new Reto({ title, description, language, dificultad });
    await reto.save();

    return res.status(200).send("Estamos coronando HP!");
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
const viewChallenge = async (req, res) => {
  try {
    const result = await Reto.find();
    return res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({
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
    res.status(404).json({
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
      const reto = await Reto.findByIdAndDelete(id);
      res.status(200).json({reto})

  } catch (error) {

    res.status(404).json({
      ok: false,
      msg: "Estoy agarrando señal carnal",
      error
    })
  }
};


// // Editar Reto

// const deleteChallenge = async (req, res) => {

//   try {

//   } catch (error) {

//   }
  
// }




export { addChallenge, viewChallenge, viewOneChallenge, deleteChallenge };
