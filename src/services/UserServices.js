import userModel from "../dao/MongoDB/models/UserModel.js"
import { getLogger } from "../helpers/logger.js";
const logger = getLogger();


const BDD = process.env.SELECTEDBDD

let productoModel
logger.info("Se selecciono la base de datos numero: "+ BDD +" para trabajar con los usuarios service")
// if (BDD == 1) {
//     await import("../dao/MongoDB/models/UserModel.js").then(modulo => {
//         productoModel = modulo.default
//     }
//     )
// } else {
//     await import("../dao/models/Postgresql/ProductoModel.js").then(modulo => {
//     productoModel = modulo.default
//     })
// }
export const findUsers = async () => {
    try {
        const users = await userModel.find()
        return users
    } catch (error) {
        return error
    }

}

export const findUserById = async (_id) => {
    try {
        const user = await userModel.findById(_id)
        return user
    } catch (error) { 
        return error
    }

}

export const findAndUpdateUser=async(id, ...info)=> {
    
    try {
        const user = await userModel.findByIdAndUpdate(id, ...info)
        return user
    } catch (error) {
        return error
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email: email })
        return user
    } catch (error) {
        return error
    }

}


export const createUser = async (user) => {
    try {
        const newUser = new userModel(user)
        await newUser.save()
        return newUser
        
    } catch (error) {
        return error
    }

}

export const deleteUserById = async (_id) => {
    try {
        const user = await userModel.findByIdAndDelete(_id)
        return user
    } catch (error) { 
        return error
    }

}

