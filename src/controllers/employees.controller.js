import {pool } from '../db.js'



/**Listar todos los empleados */
export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}

/**Listar empleado */
export const getEmployee = async (req, res) => {
const employee =req.params.id
const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [employee])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee not found'
    })

    res.json(rows[0])
}

/**Crear empleado */
export const createEmployee =  async (req, res) => {
    const {name, salary} = req.body
    const [rows]= await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: rows.insertId, 
        name, 
        salary
    })
}


/**Eliminar empleado */
export const deleteEmployee =  async (req, res) => {
    const employee =req.params.id
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [employee])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
    
        res.sendStatus(204)
    }


/**Actualizar empleado */    
export const updateEmployee = async(req, res) => {
    const {id} = req.params
    const {name, salary} = req.body
    
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Employee not found'
    })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows[0])

}

/**tener en cuenta PATCH: con el ISNULL(?, campo) de no recibirse un nuevo
 * valor, queda por defecto el anterior. Tener cuidado con respecto a PUT que pide modificar todos los cambios, o queda por defecto null
 */