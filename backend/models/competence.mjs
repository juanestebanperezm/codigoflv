import moongose from "mongoose";
const { Schema, model } = moongose;

//Esque de competencias sujeto a cambios
const competenceSchema = new Schema({
  title: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  description: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  prize: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  creator: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  final: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  state: {
    type: Boolean,
    required: { type: Boolean, default: true },
  },
});

competenceSchema.methods.toJSON = function () {
  const { __v, _id, ...competences } = this.toObject();
  competences.id = _id;
  return competences;
};

const Competence = model("competence", competenceSchema);

export default Competence;
