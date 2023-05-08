const task = require('../models/task');
const Task = require('../models/task');

exports.findTask = async(req,res) =>{
    try{
        const task = await Task.find();
        res.send(task);
    } catch{
        res.status(404).send({error: "Lista no encontrada"})
    }
}

exports.findById = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.send(task)
    } catch{
        res.status(404).send({error: "task no encontrado"})
    }
}

exports.create = async(req, res) =>{
    try{
        const tasks = new Task(req.body);
        await tasks.save();
        res.send(tasks);
    } catch{
        res.status(404).send({error: "No se pudo crear"})
    }
}

exports.update = async(req, res) => {
    try{
        const task = await Task.findById(req.params.id);
        Object.assign(task, req.body);
        task.save();
        res.send(task);
    }catch{
        res.status(404).send({error: "No se pudo completar la accion"})
    }
}

exports.delete = async(req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    }catch{
        res.status(404).send({error: "No se pudo completar la accion"})
    }
}