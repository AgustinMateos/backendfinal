import { createOrdenService } from "../services/OrderService.js";
import { findCartById } from "../services/CartServices.js";
import { getLogger } from "../helpers/logger.js";

const logger=getLogger()
export const postOrder=async(req,res)=>{
    try {
           const{id}=req.params
           
           const resultCart=await findCartById(id)
           
           const actualOrder= resultCart.products

        //    let sum = actualOrder.reduce((acc,prev)=>{
        //             acc+=prev.precio 
        //             return acc
        //          },0);
            
       let order = {
      
        number:Date.now(),
        status:"pending",
        carrito:actualOrder,
        // totalPrice:sum 
    
   }
   
    let resultOrder=await createOrdenService(order)
    
    res.send({resultOrder})
    
    } catch (error) {
        logger.error("Error al crear la orden")
        res.status(500).send('Error en crear la orden', error)
    }
 
}



// export const getOrders = async (req, res) => {
//     try {
//         const carts = await findCarts()
//         logger.info(carts)
//         res.status(200).send(carts)

//     } catch (error) {
        
//         logger.error('Error al traer los carritos');
//         res.status(500).send("Error al traer los carritos", error)
//     }

// }
















// import orderModel from "../dao/models/MongoDB/OrderModel.js";
// import { findCartById } from "../services/CartServices.js";

// export const createOrden=async(req,res)=>{
//      const {id }=req.body
//      const resultCart= await findCartById(id)
     
//     //  const actualOrders= resultCart   .filter(product=>product.includes(product.id))
//     const actualOrders= resultCart.products
//     let sum = actualOrders.reduce((acc,prev)=>{
//         acc+=prev.precio
//         return acc
//      },0);

//    let orderNumber=Date.now() 
//    let order = {
      
//     number:orderNumber,
//     status:"pending",
//     cart:actualOrders.map(product=>product.id),
//     totalPrice:sum
//    }

//    let orderResult= await orderModel.createOrderService(order)
//    order.push(orderResult._id)
//    res.send({status:"success",orderResult})
   
// }