
let jugueteModel
const BDD = 1
console.log("Se selecciono la base de datos numero: "+BDD+" para trabajar con los juguetes service")
if (BDD == 1) {
    await import("../dao/models/MongoDB/JugueteModel.js").then(modulo => {
        jugueteModel = modulo.default
    }
    )
} else {
    await import("../dao/models/Postgresql/JugueteModel.js").then(modulo => {
        jugueteModel = modulo.default
    })
}



export const findToys = async () => {
    try {
        let toys
        if (BDD == 1) {
            toys = await jugueteModel.find()
        } else {
            toys = await jugueteModel.findAll()
        }
        return toys
    } catch (error) {
        return error
    }

}

export const createToy = async (toy) => {

    try {
        let newToy
        if (BDD == 1) {
            newToy = new jugueteModel(toy)
            newToy.save()
        } else {
            newToy = jugueteModel.build(toy)
            newToy.save()
        }

        return newToy
    } catch (error) {
        return error
    }

}

