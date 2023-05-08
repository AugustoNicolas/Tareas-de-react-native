const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskScheme = mongoose.Schema({
    nombre : String,
    detalle: String,
    vencimiento : String,
    prioridad : Number,
    nota: String,
    estado: Number,
    foto: Array,
    origin: Array,
    subTask: Array
})

module.exports = mongoose.model("task", TaskScheme, "task")