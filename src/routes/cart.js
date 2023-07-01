import { Router } from "express";
import { getCarts, postCart, postProductCart } from "../controllers/cart.js";



 const routerCart=Router()

routerCart.post('/newCart',postCart)
routerCart.post('/addToCart/:id',postProductCart)
routerCart.get('/',getCarts)


export default routerCart