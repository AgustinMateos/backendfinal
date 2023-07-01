import { createCarrito,addProductCart,findCarts } from "../services/CartServices.js"

export const postCart = async (req, res) => {
    try {
        
        const newCart = createCarrito()
        console.log(newCart)
        res.status(200).send(newCart)
       
    } catch (error) {
        res.status(500).send('Error en postProducts', error)
    }
}

export const postProductCart = async (req, res) => {
    const { id } = req.params
    const { id_prod, cant } = req.body

    try {
        const product = await addProductCart(id, id_prod, cant)
        res.status(204).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


export const getCarts = async (req, res) => {
    try {
        const carts = await findCarts()
        console.log(carts)
        res.status(200).send(carts)

    } catch (error) {
        
        res.status(500).send("Error en getCarts", error)
    }

}