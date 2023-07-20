import {productModel} from "../dao/models/MongoDB/ProductModel.js"
import { getLogger } from "../helpers/logger.js";
const logger = getLogger();

const BDD = process.env.SELECTEDBDD

let productoModel
logger.info("Se selecciono la base de datos numero: "+BDD+" para trabajar con los productos service")
if (BDD == 1) {
    await import("../dao/models/MongoDB/ProductModel.js").then(modulo => {
        productoModel = modulo.default
    }
    )
} else {
    await import("../dao/models/Postgresql/ProductoModel.js").then(modulo => {
    productoModel = modulo.default
    })
}

export const createProduct = async (product) => {

    try {
        let newProduct
        if (BDD == 1) {
            newProduct = new productModel(product)
            newProduct.save()
        } else {
            newProduct = productModel.build(product)
            newProduct.save()
            
        }

        return newProduct
    } catch (error) {
        return error
    }

}


export const findproducts = async () => {
    try {
        let products
        if (BDD == 1) {
            products = await productModel.find()
        } else {
            products = await productModel.findAll()
        }
        return products
    } catch (error) {
        return error
    }

}


export const findProductById = async (_id) => {
    try {
        const user = await productModel.findById(_id)
        return user
    } catch (error) { 
        return error
    }
// const productDTO = new ProductDTO( product )
        // return productDTO
}

export const findAndUpdateElement=async(id, ...info)=> {
    
    try {
        const product = await productModel.findByIdAndUpdate(id, ...info)
        return product
    } catch (error) {
        return error
    }
}