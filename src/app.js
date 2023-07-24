import express from 'express';
import cartasRoutes from './routes/cartas.routes.js'
import indexRoutes from './routes/index.routes.js'
import serverless from 'serverless-http';
import './config.js'
import { PORT } from './config.js';
const app=express()

app.use(express.json())
app.use(indexRoutes)
app.use('/api',cartasRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message:'endpoint not found'
    })
})

export const handler = serverless( app );