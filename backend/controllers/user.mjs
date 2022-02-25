//Paquetes

//Modelo
import UserSchema from "../modelos/Users.mjs";

//Middleware para añadir un user
const addUser = async (req, res) => {
  try {
    const { name,email,password } = req.body;
    const user = new UserSchema({ name,email,password });
    await user.save();

    return res.status(200).send("Estamos coronando HP!");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el que hizo esta chimbada pa que lo arregle",
      error,
    });
  }
};


const viewUsers=async(req,res)=>{
  try{

    const result = await UserSchema.find();
    return res.json(result);

  }catch(error){
    console.log(error);
    res.status(500).json({
      ok:false,
      msg:"Haber que te digo, mmmm sera que nos quedamos sin plata para pagar por esto?",
      error,
    })
  }
}



export { addUser,viewUsers };
