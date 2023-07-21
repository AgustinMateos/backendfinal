import { Schema, model } from 'mongoose'

const cartSchema = new Schema({
    products: [{
                id_prod: {
                    type: Schema.Types.ObjectId,
                    ref: 'productos',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }],
})

const cartModel = model("Carrito", cartSchema)

export default cartModel


