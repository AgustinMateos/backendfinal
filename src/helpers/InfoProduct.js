export const generateProductErrorInfo=(product)=>{
    return `One or more propeties were incomplete or not valid.
    List of required propieties:
    *name:needs to be String, received ${product.nombre}
    *descripcion:needs to be String, received ${product.descripcion}
    *precio:needs to be String, received ${product.precio}`
}