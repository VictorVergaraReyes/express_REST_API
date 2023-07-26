import express from 'express';
import cors from 'cors'
import cartasRoutes from './routes/cartas.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'
import { PORT } from './config.js';
const app=express()
app.use(cors());

app.use(express.json())
app.use(indexRoutes)
app.use('/api',cartasRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message:'endpoint not found'
    })
})

export default app;