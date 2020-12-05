const controller = {};
const Task = require('../models/task')

controller.list = async(req,res) =>{
    const tasks = await Task.find();
    res.render('index',{
        tasks
    })
}

controller.add = async(req,res) =>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/')
}

module.exports = controller;