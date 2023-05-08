const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const taskController = require('./controllers/taskC')

mongoose.connect('mongodb://localhost:27017/tareasNative',
{useNewUrlParser: true})
.then(() =>{
    const app = express();
    app.use(cors());
    app.options('*', cors());
    app.use(express.json({limit: '100mb'}));

    app.get("/tasks", taskController.findTask);
    app.get("/tasks/:id", taskController.findById);
    app.post("/tasks", taskController.create);
    app.patch("/tasks/:id", taskController.update);
    app.delete("/tasks/:id", taskController.delete);

    
    app.listen(8002, () => {
        console.log("Al aireeeeee");
    });
})
.catch((e) =>{
    console.log("hubo un error xd")
    
    console.log(e)
})