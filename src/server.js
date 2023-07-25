import app from "./app.js"
import { PORT, DB_USER, DB_HOST, DB_DATABASE} from "./config.js"

app.listen(PORT)
console.log("server on port ",PORT)
console.log("server on DB_USER ",DB_USER)
console.log("server on DB_HOST ",DB_HOST)
console.log("server on DB_DATABASE ",DB_DATABASE)