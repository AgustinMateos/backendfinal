import { createOrdenService} from "../services/OrderService.js";
import { findCartById } from "../services/CartServices.js";
import { getLogger } from "../helpers/logger.js";

const logger=getLogger()
export const postOrder=async(req,res)=>{
    try {
           const{id}=req.params
           
           const resultCart=await findCartById(id)
           
           const actualOrder= resultCart.products

    
            
        function obtenerFechaHoy() {
            const fechaHoy = new Date();
            const dia = fechaHoy.getDate();
            const mes = fechaHoy.getMonth() + 1; 
            const anio = fechaHoy.getFullYear();
          
            return `${dia}/${mes}/${anio}`;
          }
       let order = {
        date: obtenerFechaHoy(),
        numberOrder:Date.now()+Math.floor(Math.random()*1000),
        status:"success",
        carrito:actualOrder,
        
    
   }
   
    let resultOrder=await createOrdenService(order)
    
    res.send({resultOrder})
    
    } catch (error) {
        logger.error("Error al crear la orden")
        res.status(500).send('Error en crear la orden', error)
    }
 
}


