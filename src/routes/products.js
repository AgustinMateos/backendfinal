import { Router } from 'express'
import { getProducts, postPodructs } from '../controllers/product.js'

const routerProducts = Router()

routerProducts.get('/', getProducts)
routerProducts.post("/", postPodructs)

export default routerProducts