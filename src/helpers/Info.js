export const generateUserErrorInfo=(product)=>{
    return `One or more propeties were incomplete or not valid.
    List of required propieties:
    *name:needs to be String, received ${product.name}
    *descripcion:needs to be String, received ${product.descripcion}
    *precio:needs to be String, received ${product.precio}`
}