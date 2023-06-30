import { findproducts, createProduct } from "../services/ProductServices.js"

export const getProducts = async (req, res) => {
    try {
        const products = await findproducts()
        console.log(products)
        res.status(200).send(products)

    } catch (error) {
        
        res.status(500).send("Error en getProducts", error)
    }

}

export const postPodructs = async (req, res) => {
    try {
        const { nombre, descripcion, precio } = req.body
        const newProduct = createProduct({ nombre, descripcion, precio })

        res.status(200).send(newProduct)
    } catch (error) {
        res.status(500).send('Error en postProducts', error)
    }

}