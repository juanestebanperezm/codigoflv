import bcrypt from "bcrypt";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const options = {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
}
const userSchema = new Schema({
  name: {
    first: {
      type: String,
      trim: true,
      required: [true, 'Los nombres son obligatorios']
    },
    last: {
      type: String,
      trim: true,
      required: [true, 'Los apellidos son obligatorios']
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    url: {
      type: String,
    },
    public_id: {
      type: String,
    }
  },
  status: {
    type: Boolean,
    default: true
  },
}, options);

/*Se define la propieda virtual fullName para acceder al nombre completo del usuario (por comodidad)*/
userSchema.virtual('fullName').get(function(){
  return `${this.name.first} ${this.name.last}`
});

/*Sobreescribir el método toJSON para enviar lo que nos interesa en la respuesta al frontend*/
userSchema.methods.toJSON = function () {
  const { __v, _id, password, ...user } = this.toObject();
  user.id = _id;
  return user;
};

/**
 * Método para encriptar la contraseña del usuario
 * @param {String} password - Contraseña del usuario 
 * @returns Contraseña encriptada
 */
userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 * Método para verificar si la contraseña está firmada y es válida
 * @param {String} password - Contraseña encriptada
 * @returns - True si la contraseña hace match de lo contrario false
 */
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default model("User", userSchema);
