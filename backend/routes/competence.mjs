import { Router } from "express";
import { body, param } from "express-validator";

//Controladores
import {
  createCompetence,
  getCompetences,
  updateCompetence,
  deleteCompetence,
} from "../controllers/competence.mjs";

//Router de compentencias
const competenceRouter = Router();

//Posts
competenceRouter.post("/", createCompetence);

//Edit
competenceRouter.put("/:id", updateCompetence);

//Delete
competenceRouter.delete("/:id", deleteCompetence);

//Gets
competenceRouter.get("/", getCompetences);

export default competenceRouter;
