const mongoose = require('mongoose');
//nos permite definir como luciran los datos
const Schema = mongoose.Schema;
//asigna a una coleccion y define la forma de como se almacenaran 
const taskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type:Boolean,
        default: false
    }
});



module.exports = mongoose.model('task',taskSchema);