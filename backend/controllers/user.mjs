//Paquetes

//Modelo
import { generateJWT } from "../helpers/generate-jwt.mjs";
import User from "../models/user.mjs";

//Middleware para añadir un user

const addUser = async (req, res) => {
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

const viewUsers = async (req, res) => {
  try {
    const result = await UserSchema.find();
    return res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Haber que te digo, mmmm sera que nos quedamos sin plata para pagar por esto?",
      error,
    });
  }
};

export { addUser, viewUsers };
