import Competencia from "../modelos/Competencias.mjs";
import Reto from "../modelos/Retos.mjs";

//Middleware para agregar competencias

const addCompetencia = async (req, res) => {
  try {
    const { title, description, premio, creador, final, estado } = req.body;
    const competencia = new Competencia({
      title,
      description,
      premio,
      creador,
      final,
      estado,
    });
    await competencia.save();

    return res.status(201).send({
      ok: true,
      msg: "La competencia ha sido creada, ahora espera que te inunden de solicitudes, buena suerte!",
      competencia,
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

//Ver todas las competencias

const getCompetencias = async (req, res) => {
  try {
    const { limit = 30, skip = 0 } = req.query;
    const [totalCompetencias, competencias] = await Promise.all([
      Competencia.countDocuments(),
      Competencia.find()
        .limit(+limit)
        .skip(+skip),
    ]);

    return res.status(200).json({
      ok: true,
      total: totalCompetencias,
      competencias,
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

//Editar competencias

const editCompetencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, premio, creador, final, estado } = req.body;
    const dbCompetencia = await Competencia.findByIdAndUpdate(
      id,
      { $set: { title, description, premio, creador, final, estado } },
      { returnOriginal: false }
    );

    res.status(200).json({
      ok: true,
      msg: "claro patron, ya el premio de 5 millones de pesos quedo actualizado a 500 mil pesos, gracias por ilusionar a estos maricas",
      competencia: dbCompetencia,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "tome su calvazo, porque este endpoint no sirve",
      error,
    });
  }
};

//Eliminar Competencia

const deleteCompetencia = async (req, res) => {
  try {
    const { id } = req.params;
    const findCompetenciaAndDelete = await Reto.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      msg: "y se marcho, y a su barco le llamo, libertad",
      findCompetenciaAndDelete,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "parcero eso no quiere borrar jajaja se va a embalar si no borra eso antes de tiempo",
      error,
    });
  }
};

export { addCompetencia, getCompetencias, editCompetencia, deleteCompetencia };
