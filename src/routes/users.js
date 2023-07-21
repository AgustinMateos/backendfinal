import { Router } from 'express'
import { getUsers,getUserById, putUpdateUser, UserByIDelete } from "../controllers/user.js";

const routerUsers = Router()

routerUsers.get('/', getUsers)
routerUsers.get('/:id',getUserById)
routerUsers.put('/:id',putUpdateUser)
routerUsers.delete('/:id',UserByIDelete)



export default routerUsers