const Model = require("./model")

function addMedicines(medicines){
    const newMedicines = new Model(medicines);
    newMedicines.save()
}

async function listMedicines(){
    const medicines = await Model.find()
    return medicines;
}


module.exports = {
    add: addMedicines,
    list: listMedicines,
}