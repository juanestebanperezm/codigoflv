const {Router}=require("express")

const router=Router();


router.get("/",(req,res)=>{
    res.status(200).send("Hola probando")
})


router.get("/inicio/",(req,res)=>{
    res.status(200).send("hpta")
})

router.post("/crearreto",(req,res)=>{
    
})

module.exports=router