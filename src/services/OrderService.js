import orderModel from "../dao/models/MongoDB/OrderModel.js"
let ordenModel
const BDD = 1
console.log("Se selecciono la base de datos numero: " + BDD + " para trabajar con las orders service")
if (BDD == 1) {
    await import("../dao/models/MongoDB/OrderModel.js").then(modulo => {
        ordenModel = modulo.default
    }
    )
} else {
    await import("../dao/models/Postgresql/ProductoModel.js").then(modulo => {
    ordenModel = modulo.default
    })
}

export const createOrdenService=async(orden)=>{
    try{
        let newOrden
        if(BDD){
            newOrden=new orderModel(orden)
            newOrden.save()
        }else{
            newOrden=orderModel.build(orden)
            newOrden.save()
        }
        return newOrden
    }catch(error){
    return error}

}


















// import orderModel from "../dao/models/MongoDB/OrderModel.js";

// export default class Order{
//      createOrderService=async(order)=>{
//          try{
//             let result=await orderModel.create(order)
//             return result;
//          }catch(error){
//           console.log(error);
//           return null
//          }

//      }
// }