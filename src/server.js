const express = require("express")
const app = express()
const path = require("path")

// settings
const config = require("../config")
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "html")

// middlewares
app.use((req, res, next)=>{
    // Registrar peticiones
    console.log(`${req.url} -${req.method}`)
    next()
})
app.set("views", path.join(__dirname, "views"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "ejs")

// routes
const router = express.Router();
router.get("/", (req, res)=>{
    res.render("index.html")
})

app.use(router)

// port
app.listen(config.api.port, ()=>{
    console.log("API Listening on http://127.0.0.1:"+ config.api.port)
})