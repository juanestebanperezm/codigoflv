import moongose from "mongoose";
const { Schema, model } = moongose;

//Este esquema require poder almacenar un array donde se establezcan las categorias de una respúesta
//Ya que puede tener varias, Matematicas, estructuras de datos, string y muchas de estas combinadas :O

const answerSchema = new Schema({
  idUser: {
    title: String,
    userBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    }
  },

  idQuestion: {
    type: String,
    answerBy: {
      type: Schema.Types.ObjectId,
      ref: "challenge",
    }
  },
  language: {
    type: String,
    required: true,
  },
  argument: {
    type: String,
    required:true,
  },
  code: {
    type: String,
    required: true,
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

answerSchema.methods.toJSON = function () {
  const { __v, _id, ...answers } = this.toObject();
  answers.id = _id;
  return answers;
};

const Answer = model("answer", answerSchema);

export default Answer;
