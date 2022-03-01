import { generateJWT } from "../helpers/generate-jwt.mjs";
import User from "../models/user.mjs";

//Middleware para añadir un user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email });

    user.password = await user.encryptPassword(password);
    await user.save();

    const token = await generateJWT(user.id);

    return res.status(201).send({
      ok:true,
      token,
      user
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

// Middleware para iniciar sesión
const userLogin = async (req, res) => {
  try {
    const { user } = req;
    const token = await generateJWT(user.id);

    return res.status(200).json({
      ok:true,
      token,
      user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el que hizo esta chimbada pa que lo arregle",
      error,
    });
  }
}

//Middleware para obtener todos los usuarios
//TODO: Arreglar esta vuelta (si hay alguna algo que arreglar)
const getUsers = async (req, res) => {
  try {
    const result = await UserSchema.find();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Haber que te digo, mmmm sera que nos quedamos sin plata para pagar por esto?",
      error,
    });
  }
};

export { createUser, getUsers, userLogin };
