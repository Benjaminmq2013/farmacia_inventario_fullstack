const express = require("express")
const router = express.Router()
const response = require("../../network/response")
const controller = require("./controller")


router.post("/", (req, res)=>{
    console.log(req.method, req.body)

    controller.addMedicines(req.body.productName, req.body.productCodeBar, req.body.productBuyingPrice, req.body.productSellingPrice, req.body.productInStock, req.body.productBrand)
        .then(data =>{
            response.success(req, res, data, 201)
        })
        .catch(err =>{
            response.error(req, res, "Internal Error", 500, err)
        })
})

router.get("/", (req, res)=>{
    controller.getMedicines()
        .then((medicinesList)=>{
            response.success(req, res, medicinesList, 200)
        })
        .catch(err =>{
            response.error(req, res, "Unexpected Error", status, errorDetails)
        })
})

module.exports = router;