import {Schema,model}from 'mongoose'

const orderSchema =new Schema({
    number:{
        type:String,
        required:true
    },
    carrito:{
        type:Array,
        required: true
    },
    // totalPrice:Number
    status:{
    type:String
    }
    
})

const orderModel=model("orders",orderSchema)

export default orderModel










// import mongoose, { Schema, model } from 'mongoose'


// const schemaOrder= new mongoose.Schema({
//     number:Number,
//     cart:{
//         type: Schema.Types.ObjectId,
//         ref:"carritos"
//     },
   
//     totalPrice:Number
// })

// const orderModel=model("Orders",schemaOrder)

// export default orderModel

