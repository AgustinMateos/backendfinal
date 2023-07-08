import EErrors from "./Eerror.js";

export default (error,req,res,next)=>{
    console.log(error.cause);
    switch(error.code){
        case EErrors.INVALID_TYPES_ERROR:
        res.send({status:"error",error:error.name})
        break;
        default:
            res.send({status:"error",error:"Unhanbled error"})
    }


}