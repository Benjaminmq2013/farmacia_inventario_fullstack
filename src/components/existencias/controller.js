const store = require("./store")

function addMedicines(productName, productCodeBar, productBuyingPrice, productSellingPrice, productInStock, productBrand){
    return new Promise((resolve, reject) =>{

        if(!productName || !productCodeBar || !productBuyingPrice || !productSellingPrice || !productInStock || !productBrand){
            console.error("Medicines_Controller: Faltan datos del medicamento")
            reject("Los datos ingresados son invalidos")
            return false;
        }

        const fullMedicine = {
            productName: productName,
            productCodeBar: productCodeBar,
            productBuyingPrice: productBuyingPrice,
            productSellingPrice: productSellingPrice,
            productInStock: productInStock,
            productBrand: productBrand,
        }
        store.add(fullMedicine)
        resolve(fullMedicine)
    })
}

function getMedicines(){
    return new Promise((resolve, reject)=>{
        resolve(store.list())
    })
}

function deleteMedicine(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            reject("Id Invalido")
            return false;
        }
        store.remove(id)
        .then(()=>{
            resolve()
        })
        .catch(e =>{
            reject()
        })
    })
}

module.exports = {
    addMedicines,
    getMedicines,
    deleteMedicine
}