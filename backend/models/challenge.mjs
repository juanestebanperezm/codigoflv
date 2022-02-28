import moongose from "mongoose";
const { Schema, model } = moongose;

const options = {
  timestamps: true
}

const challengeSchema = new Schema({
  title: {
    type: String,
    required: [
      true,
      "El titulo es obligatorio ome, o es que la gente adivina de que trata?",
    ]
  },
  description: {
    type: String,
    required: [
      true,
      "Aqui tenes que explicar la gente no adivina lo que estas tratando de inventar",
    ],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dificulty: {
    type: String,
    required: true,
  }
}, options);

/*Se sobreescribe el método toJSON para enviar la información que necesitemos*/
challengeSchema.methods.toJSON = function () {
  const { __v, _id, ...challenges } = this.toObject();
  challenges.id = _id;
  return challenges;
};

const Reto = model("Challenge", challengeSchema);

export default Reto;