import moongose from "mongoose";
const { Schema, model } = moongose;

//Este esquema require poder almacenar un array donde se establezcan las categorias de una respúesta
//Ya que puede tener varias, Matematicas, estructuras de datos, string y muchas de estas combinadas
//TODO: Crear el esquema Language y asociarlo como un Typs.ObjectId en la proiedad language
const options = { timestamps: true }

const answerSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  idQuestion: {
    type: Schema.Types.ObjectId,
    ref: "Challenge",
  },
  language: {
    type: String,
    required: true,
  },
  argument: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  }
}, options);

answerSchema.methods.toJSON = function () {
  const { __v, _id, ...answers } = this.toObject();
  answers.id = _id;
  return answers;
};

const Answer = model("Answer", answerSchema);

export default Answer;
