import { Router } from 'express'
import { getUsers,getUserById, putUpdateUser } from "../controllers/user.js";

const routerUsers = Router()

routerUsers.get('/', getUsers)
routerUsers.get('/:id',getUserById)
routerUsers.put('/:id',putUpdateUser)


export default routerUsers