import { findproducts, createProduct, findProductById, findAndUpdateElement,deleteProductById } from "../services/ProductServices.js"
import { getLogger } from "../helpers/logger.js"

const logger = getLogger();
export const postPodructs = async (req, res) => {
    try {
        const { nombre, descripcion, precio } = req.body
        const newProduct =await createProduct({ nombre, descripcion, precio })
        logger.info("Se creo un producto")
        res.status(200).send(newProduct)
    } catch (error) {
        logger.error("Error al crear producto")
        res.status(500).send('Error en postProducts', error)
    }

}

export const getProducts = async (req, res) => {
    try {
        const products = await findproducts()
        logger.info(products);
        res.status(200).send(products)

    } catch (error) {
        logger.error('Error al traer los productos');
        res.status(500).send("Error en getProducts", error)
    }

}

export const getProductById=async (req, res)=>{
    const { id } = req.params
    try{
        const productById= await findProductById(id)
        res.status(200).send(productById)
    }catch(error){
        logger.info('Error al traer el producto por id', error);
        res.status(500).send("error en la busqueda de producto por id",error)
    }
}

export const putUpdateProduct = async (req, res) => {
    const { id } = req.params
    const { nombre, descripcion,precio} = req.body
    try {
        const product = await findAndUpdateElement(id, { nombre: nombre, descripcion: descripcion, precio: precio})

        if (product) {
            logger.info("producto actualizado correctamente")
            return res.status(200).json({
                message: "Producto actualizado"
            })
        }

        res.status(200).json({
            message: "Producto no encontrado"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

export const ProductByIDelete=async (req, res)=>{
    const { id } = req.params
    try{
        const userById= await deleteProductById(id)
        logger.info("se trajo y se elimino correctamente el producto by id")
        res.status(200).send("se elimino el producto by id")
    }catch(error){
        logger.error("error al buscar el producto by id para ser eliminado")
        res.status(500).send(error)
    }}