import cartModel from "../dao/MongoDB/models/CartModel.js";

import { getLogger } from "../helpers/logger.js";
const logger=getLogger();


const BDD = process.env.SELECTEDBDD
let carritoModel
logger.info("Se selecciono la base de datos numero: " + BDD + " para trabajar con los carritos service")


export const createCarrito = async (cart) => {

    try {
        let newCart
        if (BDD == 1) {
            newCart = new cartModel(cart)
            newCart.save()
        } else {
            newCart = cartModel.build(cart)
            newCart.save()

        }

        return newCart
    } catch (error) {
        return error
    }

}

export const addProductCart = async (id, idProd, cant) => {
    try {
        const carrito = await cartModel.findById(id)
        carrito.products.push({ id_prod: idProd, quantity: cant })
        return carrito.save()
    }
    catch { return logger.error('no se pudo agregar') }

}


export const findCarts = async () => {
    try {
        let carts
        if (BDD == 1) {
            carts = await cartModel.find()
        } else {
            carts = await cartModel.findAll()
        }
        return carts
    } catch (error) {
        return error
    }

}

export const findCartById = async (_id) => {
    try {
        const user = await cartModel.findById(_id)
        return user
    } catch (error) {
        return error
    }

}


