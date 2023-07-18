import {pool} from '../db.js'

//Obteniendo cartas
export const getCards = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM card')
    res.json(rows)
}

//Obteniendo una carta
export const getCard = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM card WHERE id = ?', [req.params.id])
    console.log(rows)
    res.json(rows[0])

    if (rows.length <=0 ) return res.status(404).json({
        message: "Card not found"
    })
}

//Creando una carta
export const createCard = async (req,res) => {
    const {name,type,attack,defense} =req.body 
    const [rows] = await pool.query('INSERT INTO card (name,type,attack,defense) VALUES (?,?,?,?)',[name,type,attack,defense]) //Sintaxis de la libreria
    console.log(req.body)
    res.send({
        id: rows.insertId,
        name,
        salary,
    })
}
export const deleteCard = async (req,res)=>{
    const [result] = await pool.query('DELETE FROM card WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0){
        message: "Card not found"
    }
    console.log(result)
 
    res.sendStatus(204)
}

export const updateCard = async(req,res)=>{
    const {id} = req.params
    const {name,type,attack,defense}=req.body
    const result = await pool.query('UPPDATE FROM card SET name = IFNULL(?), type = IFNULL(?), attack=IFNULL(?), defense=IFNULL(?) WHERE id = ?', [name,type,attack,defense,id])

    if (result.affectedRows == 0){
        return res.status(404).json({message:"card not found"})
    }

    const [rows] = pool.query('SELECT * FROM card WHERE id = ?',[id])

    res.json('updated card')
    console.log(result)
}
