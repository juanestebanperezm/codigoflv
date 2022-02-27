import moongose from "mongoose";
const { Schema , model }=moongose;

//Esque de competencias sujeto a cambios
const competenciasSchema=new Schema({
    title:{
        type:String,
        required:[true,"Campo obligatorio"]
    },
    description:{
        type:String,
        required:[true,"Campo obligatorio"]
    },
    premio:{
        type:String,
        required:[true,"Campo obligatorio"]
    },
    creador:{
        type:String,
        required:[true,"Campo obligatorio"]
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    final:{
        type:String,
        required:[true,"Campo obligatorio"]
    },
    estado:{
        type:Boolean,
        required:{type:Boolean,default:true}
    }
});

competenciasSchema.methods.toJSON=function(){
    const {__v,_id,...competencias}=this.toObject();
    competencias.id=_id;
    return competencias;
}

const Competencia=model('competencias',competenciasSchema);

export default Competencia