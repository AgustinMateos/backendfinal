import { findproducts, createProduct, findProductById, findAndUpdateElement } from "../services/ProductServices.js"



export const postPodructs = async (req, res) => {
    try {
        const { nombre, descripcion, precio } = req.body
        const newProduct = createProduct({ nombre, descripcion, precio })
        res.status(200).send(newProduct)
    } catch (error) {
        res.status(500).send('Error en postProducts', error)
    }

}

export const getProducts = async (req, res) => {
    try {
        const products = await findproducts()
        console.log(products)
        res.status(200).send(products)

    } catch (error) {
        
        res.status(500).send("Error en getProducts", error)
    }

}

export const getProductById=async (req, res)=>{
    const { id } = req.params
    try{
        const productById= await findProductById(id)
        res.status(200).send(productById)
    }catch(error){
        res.status(500).send("error en la busqueda de producto por id",error)
    }
}

export const putUpdateProduct = async (req, res) => {
    const { id } = req.params
    const { nombre, descripcion,precio} = req.body
    try {
        const product = await findAndUpdateElement(id, { nombre: nombre, descripcion: descripcion, precio: precio})

        if (product) {
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