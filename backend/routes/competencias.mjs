import {Router} from "express";
import {body,param} from "express-validator";

//Controladores 
import {addCompetencia,getCompetencias,editCompetencia,deleteCompetencia} from "../controllers/competencias.mjs";


//Router de compentencias
const competenciasRouter=Router();

//Posts
competenciasRouter.post('/',addCompetencia)

//Edit
competenciasRouter.put('/:id',editCompetencia)

//Delete
competenciasRouter.delete('/:id',deleteCompetencia)

//Gets
competenciasRouter.get('/',getCompetencias)

export default competenciasRouter;