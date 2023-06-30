
let productModel
const BDD = 1
console.log("Se selecciono la base de datos numero: "+BDD+" para trabajar con los productos service")
if (BDD == 1) {
    await import("../dao/models/MongoDB/ProductModel.js").then(modulo => {
        productModel = modulo.default
    }
    )
} else {
    await import("../dao/models/Postgresql/ProductModel.js").then(modulo => {
    productModel = modulo.default
    })
}



export const findproducts = async () => {
    try {
        let products
        if (BDD == 1) {
            products = await productModel.find()
        } else {
            products = await productModel.findAll()
        }
        return products
    } catch (error) {
        return error
    }

}

export const createProduct = async (product) => {

    try {
        let newProduct
        if (BDD == 1) {
            newProduct = new productModel(product)
            newProduct.save()
        } else {
            newProduct = productModel.build(product)
            newProduct.save()
        }

        return newProduct
    } catch (error) {
        return error
    }

}

