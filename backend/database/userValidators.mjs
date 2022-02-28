import User from "../models/user.mjs";

/**
 * @param {String} id - Identificador del usuario
 * @returns - Error si el id del usuario no existe, de lo contrario sigue el flujo
 */
const validateUserID = async (id) => {
  try {
    const dbUser = await User.findById(id);

    if (!dbUser) {
      throw new Error(`El reto con id ${id} no existe`);
    }

    return true;

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

/**
 * @param {String} email - Correo eletrónico a buscar
 * @returns - Error si el el correo electrónico existe, de lo contrario continua el flujo
 */
const findExistingUsedEmail = async (email) => {
  try {
    const dbUser = await User.findOne({ email });

    if (dbUser) {
      throw new Error(`El correo electrónico ${email} ya está en uso, intenta con otro`);
    }

    return true;

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

/**
 * Middleware para validar correo y contraseña
 */
const validateEmailAndPassword = async (req,res,next) => {
  try {
    const { email, password } = req.body; 
    const dbUser = await User.findOne({ email });

    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: 'Credenciales incorrectas :('
      });
    }

    const passwordMatch = await dbUser.matchPassword(password);
   
    if (!passwordMatch) {
      return res.status(400).json({
        ok: false,
        msg: 'Credenciales incorrectas :('
      });
    }

    req.user = dbUser;
    next();

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Haber que te digo, mmmm sera que nos quedamos sin plata para pagar por esto?",
      error,
    });
  }
};



export { validateUserID, findExistingUsedEmail, validateEmailAndPassword };
