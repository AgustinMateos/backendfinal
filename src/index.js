import 'dotenv/config.js'
import express from 'express'
import connectionMongoose from './db/mongoose.js'
// import twilio from 'twilio'
import cookieParser from 'cookie-parser'
import routerProducts from './routes/products.js'
import routerUsers from './routes/users.js'
import routerSession from './routes/session.js'
import passport from 'passport'
import initializePassport from './config/passport.js'
import routerCart from './routes/cart.js'


const app = express()

app.use(express.json())

connectionMongoose().then(connect => console.log("Mongoose conectado"))

app.use(cookieParser(process.env.JWT_SECRET))
app.use(passport.initialize())

initializePassport(passport)


app.use('/products', routerProducts)
app.use('/auth', routerSession)
app.use('/users', routerUsers)
app.use('/cart',routerCart)
//mensajeria twilio

// const TWILIO_ACCOUNT_SID = "AC1b079ee816f0ffbfe16a2af8b87a0818";
// const TWILIO_AUTH_TOKEN = "5a1653be7ca645816e8ff91340d6fb81";
// const TWILIO_SMS_NUMBER = "+14849788821";

// const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SMS_NUMBER)

// app.get('/sms', async (req, res) => {
  
//         let result = await client.messages.create({
//             body: 'Esto es un sms',
//             from: TWILIO_SMS_NUMBER,
//             to: "+5491164316343"
//         })
//         console.log("result:",result)
//         res.send({ status: "success", result: "Messege Sent" })
   
// })



app.listen(4000, () => {
    console.log(`Server on port 4000`)
})