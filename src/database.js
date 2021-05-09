const mongoose = require("mongoose")
const uri = ("mongodb+srv://pharmacy-admin:vvIbYOYBJeLDoUR6@farmacia-el-cielo.2lvz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const db = mongoose.connection;



mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once("connected", ()=>{
        console.log("Base de datos lista")
    })

