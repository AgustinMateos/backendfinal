import { createUser, findUserByEmail } from "../services/UserServices.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import { validatePassword, createHash } from "../utils/bcrypt.js";
import { getLogger } from "../helpers/logger.js"

const logger = getLogger();

export const loginUser = async (req, res, next) => {
    try {
        passport.authenticate('jwt', { session: false }, async (err, user, info) => {
            if (err) {
                logger.error("Error al loguearse")
                return res.status(401).send("Error en consulta de token")
            }

            if (!user) {
                // consulto por el usuario ya que el token no existe
                const { email, password } = req.body
                const userBDD = await findUserByEmail(email)

        
                if (!validatePassword(password, userBDD.password)) {
                    // Contraseña no válida
                    logger.error("contrasena novalida")
                    return res.status(401).send("Contraseña no valida")
                }

                // genero un nuevo  token porque el usuario es valido, 
                const token = jwt.sign({ user: { id: userBDD._id } }, process.env.JWT_SECRET)
                userBDD.lastLogin = new Date();
                await userBDD.save();
                console.log(userBDD)
                res.cookie('jwt', token, { httpOnly: true })
                logger.info("se genero un nuevo token")
                return res.status(200).json({ token })
            } else {
                //Validacion de token existente
               
                const token = req.cookies.jwt;
                jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                    if (err) {
                        // Token no valido
                        logger.error("Token no valido")
                        return res.status(401).send("Credenciales no validas")
                    } else {
                        // Token valido
                        req.user = user
                        logger.info("Token valido")
                        return res.status(200).send("Creedenciales validas")
                        next()
                    }
                })
            }

        })(req, res, next)
    } catch (error) {
        res.status(500).send(`Ocurrio un error en Session, ${error}`)
    }
}
export const registerUser = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password,rol } = req.body
        const userBDD = await findUserByEmail(email)

        if (userBDD) {
            res.status(401).send("Usuario ya registrado")
        } else {
            const hashPassword = createHash(password)
            const newUser = await createUser({ first_name, last_name, email, age, password: hashPassword,rol })
            logger.info(newUser)
            const token = jwt.sign({ user: { id: newUser._id } }, process.env.JWT_SECRET);
            logger.info(token);
            res.cookie('jwt', token, { httpOnly: true });
            res.status(201).json({ token });
            
           
             
        }


    } catch (error) {
        logger.error("No se realizo el registro")
        res.status(500).send(`Ocurrio un error en Registro User, ${error}`)
    }

}