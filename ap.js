// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from 'express';
import serverless from 'serverless-http';
import { getCards, getCard, createCard, updateCard, deleteCard } from "../controllers/card.controller.js";

const api = express();

const router=Router()
router.get('/server',(req, res)=> res.send('Hello world Its time to  D-D-D-D-Duel !!! '))
router.get('/card',getCards)
router.get('/card/:id',getCard)
router.post('/card',createCard)
router.patch('/card/:id', updateCard)
router.delete('/card/:id', deleteCard)
export default router

api.use('/api/', router);

export const handler = serverless(api);
