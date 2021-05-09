const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const createMedicines = new Schema({
    productName : {
        type: String,
        required: true,        
    },
    productCodeBar: Number,
    productBuyingPrice: Number,
    productSellingPrice: { type: Number, required: true },
    productInStock: Number,
    productBrand: String,

})

const model = mongoose.model("Stock", createMedicines)

module.exports = model;