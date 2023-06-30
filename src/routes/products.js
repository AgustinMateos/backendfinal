import { Router } from 'express'
import { getProductById, getProducts, postPodructs, putUpdateProduct } from '../controllers/product.js'

const routerProducts = Router()

routerProducts.get('/', getProducts)
routerProducts.get("/:id", getProductById)
routerProducts.post("/", postPodructs)
routerProducts.put("/:id",putUpdateProduct)

export default routerProducts