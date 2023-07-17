import express from 'express';
import cartasRoutes from './routes/cartas.routes.js'
import indexRoutes from './routes/index.routes.js'

const app=express()

app.use(indexRoutes)
app.use(cartasRoutes)

app.listen(3000)
console.log("server on port 3000")
 