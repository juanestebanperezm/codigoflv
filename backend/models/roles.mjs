import mongoose from "mongoose";
const { Schema, model } = mongoose;

const options = {
  timestamps: true,
}

const roleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del rol es obligatorio'],
        default: 'PROGRAMADOR'
    }
}, options);

/*Sobreescribir el método toJSON para enviar lo que nos interesa en la respuesta al frontend*/
roleSchema.methods.toJSON = function () {
  const { __v, _id, ...role } = this.toObject();
  role.id = _id;
  return role;
};
const Role = model("Role", roleSchema);
export default Role;
