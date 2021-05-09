const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const database = require("./database")
const router = require("./network/routes")

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


// Settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes
router(app)

// statics
app.use(express.static(path.join(__dirname, "public")))


// port
app.listen(config.api.port, ()=>{
    console.log("API Listening on http://127.0.0.1:"+ config.api.port)
})