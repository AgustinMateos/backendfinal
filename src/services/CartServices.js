import cartModel from "../dao/models/MongoDB/CartModel.js"
let carritoModel
const BDD = 1
console.log("Se selecciono la base de datos numero: "+BDD+" para trabajar con los carritos service")
if (BDD == 1) {
    await import("../dao/models/MongoDB/CartModel.js").then(modulo => {
        carritoModel = modulo.default
    }
    )
} else {
    await import("../dao/models/Postgresql/ProductoModel.js").then(modulo => {
    carritoModel = modulo.default
    })
}

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

export const  addProductCart= async (id, idProd, cant)=> {
    try{const carrito = await cartModel.findById(id)
    carrito.products.push({ id_prod: idProd, quantity: cant })
    return carrito.save()}catch{return console.log('no se pudo agregar')}
    
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


