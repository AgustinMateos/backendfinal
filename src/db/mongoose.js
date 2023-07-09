import mongoose from 'mongoose'
import { getLogger } from '../helpers/logger.js';

const logger= getLogger()
const connectionMongoose = async () => {
    await mongoose.connect(process.env.MONGODBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .catch((err) => logger.error(err));
}



export default connectionMongoose