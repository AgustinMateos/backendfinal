import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

export const productModel = model("Productos", productSchema)
export const productModelMocking=model("Productos mocking",productSchema)
