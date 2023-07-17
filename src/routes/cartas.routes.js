import { Router } from "express";
import { getCard, createCard, updateCard, deleteCard } from "../controllers/employees.controller";

const router=Router()
router.get('/card',getCard)
router.post('/card',createCard)
router.put('/card', updateCard)
router.delete('/card', deleteCard)
export default router