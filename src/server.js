import handler from "./app.js"
import { PORT } from "./config.js"

handler.listen(PORT)
console.log("server on port ",PORT)
 