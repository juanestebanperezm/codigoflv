import Competence from "../models/competence.mjs";

//Middleware para agregar competences

const addCompetence = async (req, res) => {
  try {
    const { title, description, prize, creator, final, state } = req.body;
    const competence = new Competence({
      title,
      description,
      prize,
      creator,
      final,
      state,
    });
    await competence.save();

    return res.status(201).send({
      ok: true,
      msg: "La competence ha sido creada, ahora espera que te inunden de solicitudes, buena suerte!",
      competence,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ora por nosotros, porque a esta pagina se la llevo el hijueputas",
      error,
    });
  }
};

//Ver todas las competences

const getCompetences = async (req, res) => {
  try {
    const { limit = 30, skip = 0 } = req.query;
    const [totalCompetences, competences] = await Promise.all([
      Competence.countDocuments(),
      Competence
        .find()
        .limit(+limit)
        .skip(+skip),
    ]);

    return res.status(200).json({
      ok: true,
      total: totalCompetences,
      competences,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Juansito se comio una puta en la castellana a las 2 AM, y eso que tiene que ver? pues que salio aburrido porque de la borrachera tan hijueputa que tenia solo le puedo echar un polvo, osea este endpoint no sirve",
      error,
    });
  }
};

//Editar competences

const editCompetence = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, prize, creator, final, state } = req.body;
    const dbCompetence = await Competence.findByIdAndUpdate(
      id,
      { $set: { title, description, prize, creator, final, state } },
      { returnOriginal: false }
    );

    res.status(200).json({
      ok: true,
      msg: "claro patron, ya el prize de 5 millones de pesos quedo actualizado a 500 mil pesos, gracias por ilusionar a estos maricas",
      competence: dbCompetence,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "tome su calvazo, porque este endpoint no sirve",
      error,
    });
  }
};

//Eliminar competence

const deleteCompetence = async (req, res) => {
  try {
    const { id } = req.params;
    const findCompetenceAndDelete = await Competence.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      msg: "y se marcho, y a su barco le llamo, libertad",
      findCompetenceAndDelete,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "parcero eso no quiere borrar jajaja se va a embalar si no borra eso antes de tiempo",
      error,
    });
  }
};


export {
  addCompetence,
  getCompetences,
  editCompetence,
  deleteCompetence,

};
