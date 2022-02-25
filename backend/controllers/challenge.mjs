//Paquetes
import mongoose from "mongoose";

//Modelo
import Reto from "../modelos/Retos.mjs";

/**
 * Middleware para añadir un reto
 */
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
  
    const result=await Reto.find()
    return res.json(result)


  } catch (error) {
    console.log(error);
    res.status(404).json({
      ok: false,
      msg: "Mor el endpoint esta caido, estamos trabajando como burros para arreglarlo",
      error,
    });
  }
};

export { addChallenge, viewChallenge };
