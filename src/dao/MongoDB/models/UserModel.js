import mongoose,{ Schema, model } from 'mongoose'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    age: {
        type: Number,
        required: true
    },
    rol: {
        type: String,
        default: "User"
    },
    password: {
        type: String,
        required: true
    }, 
    lastLogin: {
        type: Date,
        default: null,
      },
})

const userModel = model("UserProducts", userSchema)

export default userModel