import { Router } from "express";
import { getLogger } from "../helpers/logger.js";

const routerLoggerTest= Router()

routerLoggerTest.get('/', (req, res) => {

    const logger = getLogger();

    logger.debug('Debug message');
    logger.http('HTTP message');
    logger.info('Info message');
    logger.warn('Warning message');
    logger.error('Error message');
    
    
    res.send('Logs registrados en la consola o archivo dependiendo del entorno.');
  });


export default routerLoggerTest