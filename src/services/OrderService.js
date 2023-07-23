import orderModel from "../dao/MongoDB/models/OrderModel.js";
import { getLogger } from "../helpers/logger.js";
let ordenModel
const BDD = process.env.SELECTEDBDD
const logger = getLogger();

logger.info("Se selecciono la base de datos numero: " + BDD + " para trabajar con las orders service")


export const createOrdenService=async(orden)=>{
    try{
        let newOrden
        if(BDD){
            newOrden=new orderModel(orden)
            newOrden.save()
        }else{
            newOrden=orderModel.build(orden)
            newOrden.save()
        }
        return newOrden
    }catch(error){
    return error}

}

export const deleteOrderById = async (_id) => {
    try {
        const user = await orderModel.findByIdAndDelete(_id)
        return user
    } catch (error) { 
        return error
    }

}















