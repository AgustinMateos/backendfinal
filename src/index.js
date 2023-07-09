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
import routerMocking from './routes/mockingTest.js'
import compression from "express-compression"
import routertestproduct from './helpers/productErrors.js'
import errorHandler from './helpers/productErrors.js'
import routerLoggerTest from './routes/loggerTest.js'
import { getLogger } from './helpers/logger.js'

const app = express()

app.use(express.json())
const logger = getLogger();
connectionMongoose().then(connect => logger.info("Mongoose conectado"))

app.use(cookieParser(process.env.JWT_SECRET))
app.use(passport.initialize())

initializePassport(passport)

app.use(compression({
    brotli:{enabled:true,zlib:{}}
}))

app.use('/products', routerProducts)
app.use('/auth', routerSession)
app.use('/users', routerUsers)
app.use('/cart',routerCart)
app.use('/mockingproducts',routerMocking)
app.use('/testproducts',routertestproduct)
app.use('/loggerTest',routerLoggerTest)
app.use(errorHandler)



app.listen(4000, () => {
    
        logger.info(`Server on port 4000`)
})





















// r4G0kNSX3DX_Ly8MMvEUjzTVzrJlhMrZ2FQNvG-5