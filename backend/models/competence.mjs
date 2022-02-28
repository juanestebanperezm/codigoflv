import moongose from "mongoose";
const { Schema, model } = moongose;

//Esque de competencias sujeto a cambios
const options = {
  timestamps: true
}

const competenceSchema = new Schema({
  title: {
    type: String,
    required: [true, "El título de la competencia es obligatorio"],
  },
  description: {
    type: String,
    required: [true, "La descripción de la competencia es obligatoria"],
  },
  prize: {
    type: String,
    required: [true, "El monto total de la competencia es obligatoria"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  finalDate: {
    type: Date,
    required: [true, "La fecha final de la competencia es obligatoria"],
  },
  state: {
    type: Boolean,
    required: true,
    default:true
  },
}, options);

competenceSchema.methods.toJSON = function () {
  const { __v, _id, ...competences } = this.toObject();
  competences.id = _id;
  return competences;
};

const Competence = model("Competence", competenceSchema);

export default Competence;
