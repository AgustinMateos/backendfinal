import { createCarrito,addProductCart,findCarts,findCartById } from "../services/CartServices.js"
import { getLogger } from "../helpers/logger.js"
const logger = getLogger();
export const postCart = async (req, res) => {
    try {
        
        const newCart = createCarrito()
        logger.info(newCart)
        res.status(200).send(newCart)
       
    } catch (error) {
        logger.error("error al crear cart")
        res.status(500).send('Error en postProducts', error)
    }
}

export const postProductCart = async (req, res) => {
    const { id } = req.params
    const { id_prod, cant } = req.body

    try {
        const product = await addProductCart(id, id_prod, cant)
        logger.info("se agrego correctamente el producto al carrito")
        res.status(204).json(product)
    } catch (error) {
        logger.error("error al agregar producto al carrito")
        res.status(500).json({
            message: error.message
        })
    }
}


export const getCarts = async (req, res) => {
    try {
        const carts = await findCarts()
        logger.info(carts)
        res.status(200).send(carts)

    } catch (error) {
        
        logger.error('Error al traer los carritos');
        res.status(500).send("Error al traer los carritos", error)
    }

}

export const getCartById=async (req, res)=>{
    const { id } = req.params
    try{
        const cartById= await findCartById(id)
        logger.info(cartById)
        res.status(200).send(cartById)
    }catch(error){
        
        logger.error('Error al traer el cart por id');
        res.status(500).send("error en la busqueda del carrito por id",error)
    }
}