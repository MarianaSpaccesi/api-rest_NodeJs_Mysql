import { Router } from "express";
import {db} from '../controllers/index.controller.js'



const router = Router();

router.get('/ping', db)

/**al recibir por get la query 'ping', va a la conexión de la config de db.js 
 * y ejecuta una query de Mysql.
 * const [result] = esto es desestructuración de un array 
 * El res.json(result[0]) solo devuelve el primer valor del ob json que trae. 
 */

export default router; 