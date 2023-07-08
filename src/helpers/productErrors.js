import { Router } from "express";
import CustomError from "./CustomError.js";
import EErrors from "./Eerror.js";
import { generateProductErrorInfo } from "./InfoProduct.js";


const routertestproduct = Router()
const products = []


routertestproduct.post('/',(req,res)=>{
    const { nombre, descripcion, precio } = req.body;
if (!nombre || !descripcion || !precio) {
    CustomError.createError({
        name: "Product creat error",
        cause: generateProductErrorInfo({ nombre, descripcion, precio }),
        message: `El producto no se pudo crear`,
        code: EErrors.INVALID_TYPES_ERROR
    })

}

const product = {
    nombre,
    descripcion,
    precio
}

if (products.length === 0){
    product.id = 1;
} 
else {
     product.id=products[products.length-1].id+1
    }
products.push(product);
res.send({status:"success",payload:product})

})

export default routertestproduct


