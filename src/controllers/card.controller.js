import {pool} from '../db.js'

//Obteniendo cartas
export const getCard = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM card')
    res.json(rows)
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

export const updateCard = (req,res)=>res.send('actualizando cartas')

export const deleteCard = (req,res)=>res.send('eliminando cartas')