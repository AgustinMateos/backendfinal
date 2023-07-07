
import { Router } from "express";
import productModel from "../dao/models/MongoDB/ProductModel.js";
import { faker } from "@faker-js/faker";


const routerMocking = Router()

routerMocking.get('/', async (req, res) => {
    try {
        // Generar 100 productos ficticios
        const products = [];
        for (let i = 0; i < 100; i++) {
            const product = new productModel({
                nombre: faker.commerce.productName(),
                descripcion: faker.lorem.paragraph(),
                precio: faker.commerce.price()
                // Otros campos ficticios del producto
            });
            products.push(product);
        }

        // Guardar los productos en la base de datos
        await productModel.insertMany(products);

        res.json({ message: 'Productos generados satisfactoriamente' });
        console.log(products)
    } catch (error) {
        console.error('Error al generar los productos:', error);
        res.status(500).json({ error: 'Error al generar los productos' });
    }
});

export default routerMocking