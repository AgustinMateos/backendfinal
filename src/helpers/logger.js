import winston from "winston";


// Configuración del nivel de registro y transporte para el entorno de desarrollo
const developmentLogger = winston.createLogger({    
    
    transports: [
        new winston.transports.Console({level: 'debug',}),
    ],
});

// Configuración del nivel de registro y transporte para el entorno de producción
const productionLogger = winston.createLogger({
  
    transports: [
        new winston.transports.Console({level: 'info',}),
        new winston.transports.File({ filename: './errors.log', level: 'error' }),
    ],
});

// Función para obtener el logger según el entorno
export function getLogger() {
    if (process.env.NODE_ENV === 'production') {
      return productionLogger;
    }
    return developmentLogger;
  }

