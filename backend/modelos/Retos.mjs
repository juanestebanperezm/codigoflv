import moongose from "mongoose";
const {Schema,model}=moongose;


//Este esquema require poder almacenar un array donde se establezcan las categorias de un reto
//Ya que puede tener varias, Matematicas, estructuras de datos, string y muchas de estas combinadas :O 

const options = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}


const challengeSchema = new Schema({
    title: {
        type: String,
        required: [true, "El titulo es obligatorio ome, o es que la gente adivina de que trata?"]
    },
    description: {
        type: String,
        required: [true, "Aqui tenes que explicar la gente no adivina lo que estas tratando de inventar"]
    },
    language: {
        type: String,
        required: false
    },
    dificultad: {
        type: String,
        required: [false]
    }
}, options);

const Reto=model("challenge",challengeSchema);
 
export default Reto