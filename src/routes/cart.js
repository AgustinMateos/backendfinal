import { Router } from "express";
import { getCarts, postCart, postProductCart,getCartById} from "../controllers/cart.js";
import { postOrder } from "../controllers/order.js";






 const routerCart=Router()

routerCart.post('/newCart',postCart)
routerCart.post('/addToCart/:id',postProductCart)
routerCart.get('/',getCarts)
routerCart.get('/:id',getCartById)
routerCart.post('/newOrder/:id',postOrder)



export default routerCart