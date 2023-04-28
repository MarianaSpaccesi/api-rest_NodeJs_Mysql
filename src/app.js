import express from "express"
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json())

app.use('/api', employeesRoutes)
/**Guardo las rutas en un archivo de rutas utilizando el modulo routes de express
 * para que quede ordenado, luego exporto el archivo y lo importo a mi index para
 * poder trabajarlo desde acá
 * - agrego '/api para que se añada de manera dinamica en todas las rutas'
 */

app.use(indexRoutes)
/**hago lo mismo que anteriormente
 * y lo exporto en un modulo.
 */

app.use((req, res, next) => {
    res.status(404).json("API not found")
})

export default app;