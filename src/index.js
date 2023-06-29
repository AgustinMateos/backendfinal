import 'dotenv/config.js'
import express from 'express'
import connectionMongoose from './db/mongoose.js'
import twilio from 'twilio'
import cookieParser from 'cookie-parser'
import routerToys from './routes/juguete.js'
import routerUsers from './routes/users.js'
import routerSession from './routes/session.js'
import passport from 'passport'
import initializePassport from './config/passport.js'
// import cors from 'cors'


// const whiteList = ['http://localhost:3000'] //Rutas validas a mi servidor

// const corsOptions = { //Reviso si el cliente que intenta ingresar a mi servidor esta o no en esta lista
//     origin: (origin, callback) => {
//         if (whiteList.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by Cors'))
//         }
//     }
// }

const app = express()

app.use(express.json())
// app.use(cors(corsOptions))


connectionMongoose().then(connect => console.log("Mongoose conectado"))

app.use(cookieParser(process.env.JWT_SECRET))
app.use(passport.initialize())
initializePassport(passport)
app.use('/users', routerUsers)
app.use('/toys', routerToys)
app.use('/auth', routerSession)
//mensajeria twilio

const TWILIO_ACCOUNT_SID="AC1b079ee816f0ffbfe16a2af8b87a0818";
const TWILIO_AUTH_TOKEN="5a1653be7ca645816e8ff91340d6fb81";
const TWILIO_SMS_NUMBER=+14849788821;

const client=twilio(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,TWILIO_SMS_NUMBER)

app.get('/sms',async(req,res)=>{
    let result=await client.messages.create({
    body:'Esto es un sms',
    from: TWILIO_SMS_NUMBER,
    to:"+5491164316343"
   })
res.send({status:"success",result:"Messege Sent"})})

app.listen(4000, () => {
    console.log(`Server on port 4000`)
})