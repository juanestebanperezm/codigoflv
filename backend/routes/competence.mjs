import { Router } from "express";
import { body, param } from "express-validator";

//Controladores
import {
  addCompetence,
  getCompetences,
  editCompetence,
  deleteCompetence,
} from "../controllers/competence.mjs";

//Router de compentencias
const competenceRouter = Router();

//Posts
competenceRouter.post("/", addCompetence);

//Edit
competenceRouter.put("/:id", editCompetence);

//Delete
competenceRouter.delete("/:id", deleteCompetence);

//Gets
competenceRouter.get("/", getCompetences);

export default competenceRouter;
