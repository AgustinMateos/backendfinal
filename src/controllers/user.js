import { findUsers,findUserById,findAndUpdateUser } from "../services/UserServices.js";


export const getUsers = async (req, res) => {
    try {
        const users = await findUsers()
        res.status(200).send(users)

    } catch (error) {
        res.status(500).send(error)
    }

}
export const putUpdateUser = async (req, res) => {
    const { id } = req.params
    const { first_name,last_name,email,age,rol} = req.body
    try {
        const product = await findAndUpdateUser(id, { first_name: first_name, last_name: last_name, email: email,age:age,rol:rol})

        if (product) {
            return res.status(200).json({
                message: "Usuario actualizado"
            })
        }

        res.status(200).json({
            message: "Usuario no encontrado"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}
export const getUserById=async (req, res)=>{
    const { id } = req.params
    try{
        const userById= await findUserById(id)
        res.status(200).send(userById)
    }catch(error){
        res.status(500).send(error)
    }
}


