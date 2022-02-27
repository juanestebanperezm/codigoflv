import moongose from "mongoose";
const { Schema, model } = moongose;

//Este esquema require poder almacenar un array donde se establezcan las categorias de una respúesta
//Ya que puede tener varias, Matematicas, estructuras de datos, string y muchas de estas combinadas :O

const repuestaSchema = new Schema({
  id_usuario: {
    title: String,
    userBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    required: [true, "Aqui va id de usuario que va a comtestar la prejunta"],
  },

  id_pregunta: {
    type: String,
    respuestaBy: {
      type: Schema.Types.ObjectId,
      ref: "challenge",
    },
    required: [true, "Aqui va id de la pregunta que se va a contestar"],
  },
  language: {
    type: String,
    required: true,
  },
  argumento: {
    type: String,
    required: [true, "Aqui tenes que explicar la respuesta al reto"],
  },
  codigo: {
    type: String,
    required: [
      true,
      "Aqui tenes que pegar el codigo para la respuesta al reto",
    ],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

repuestaSchema.methods.toJSON = function () {
  const { __v, _id, ...respuestas } = this.toObject();
  respuestas.id = _id;
  return respuestas;
};

const Respuesta = model("respuesta", repuestaSchema);

export default Respuesta;
