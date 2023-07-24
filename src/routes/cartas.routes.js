import { Router } from "express";
import { getCards, getCard, createCard, updateCard, deleteCard } from "../controllers/card.controller.js";

const router=Router()
router.get('/server',(req,res)=>res.send('Conexion con la API'))
router.get('/card',getCards)
router.get('/card/:id',getCard)
router.post('/card',createCard)
router.patch('/card/:id', updateCard)
router.delete('/card/:id', deleteCard)
export default router
