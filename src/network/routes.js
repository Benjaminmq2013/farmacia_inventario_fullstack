const express = require("express")
const router = require("./network")
const medicines = require("../components/existencias/network.js")

const routes = function (server){
    server.use("/", router)
    server.use("/medicines", medicines)
}

module.exports = routes;