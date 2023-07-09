import EErrors from "./Eerror.js";
import { getLogger } from "./logger.js";

const logger = getLogger()
export default (error,req,res,next)=>{
    logger.error(error.cause);
    switch(error.code){
        case EErrors.INVALID_TYPES_ERROR:
        res.send({status:"error",error:error.name})
        break;
        default:
            res.send({status:"error",error:"Unhanbled error"})
    }


}