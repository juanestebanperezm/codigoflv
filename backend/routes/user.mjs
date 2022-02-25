import {Router} from "express"

import {
    addUser,viewUsers
} from "../controllers/user.mjs"

//Router

const usersRouter=Router();


//Gets
usersRouter.get('/',viewUsers)

//Post
usersRouter.post("/",addUser)


export default usersRouter;