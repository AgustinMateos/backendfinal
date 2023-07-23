import {productModel} from "../dao/MongoDB/models/ProductModel.js"
import { getLogger } from "../helpers/logger.js";
import productDto from "../dto/productDto.js";
const logger = getLogger();

const BDD = process.env.SELECTEDBDD
let productoModel
logger.info("Se selecciono la base de datos numero: "+BDD+" para trabajar con los productos service")


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
        let productsDto
        if (BDD == 1) {
            products = await productModel.find()
            productsDto= products.map(product=>new productDto(product))
        } else {
            products = await productModel.findAll()
        }
        return productsDto
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

}

export const findAndUpdateElement=async(id, ...info)=> {
    
    try {
        const product = await productModel.findByIdAndUpdate(id, ...info)
        return product
    } catch (error) {
        return error
    }
}

export const deleteProductById = async (_id) => {
    try {
        const user = await userModel.findByIdAndDelete(_id)
        return user
    } catch (error) { 
        return error
    }

}