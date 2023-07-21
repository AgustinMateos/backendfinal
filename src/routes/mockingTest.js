import { Router } from "express";
import { productModelMocking } from "../dao/MongoDB/models/ProductModel.js";
import { faker } from "@faker-js/faker";
import { getLogger } from "../helpers/logger.js";

const logger=getLogger()


const routerMocking = Router()

routerMocking.get('/', async (req, res) => {
    try {
        // Generar 100 productos 
        const products = [];
        for (let i = 0; i < 100; i++) {
            const product = new productModelMocking({
                nombre: faker.commerce.productName(),
                descripcion: faker.lorem.paragraph(),
                precio: faker.commerce.price()
                
            });
            products.push(product);
        }

        // Guardar los productos en la base de datos
        await productModelMocking.insertMany(products);

        res.json({ message: 'Productos generados satisfactoriamente' });
        logger.info(products)
    } catch (error) {
        logger.error('Error al generar los productos:');
        res.status(500).json({ error: 'Error al generar los productos' });
    }
});

export default routerMocking