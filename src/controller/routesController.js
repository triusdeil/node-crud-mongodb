const controller = {};
const { render } = require('ejs');
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

controller.turn = async(req, res) =>{
    const { id } = req.params
    const task = await Task.findById(id)
    task.status = !task.status
    await task.save()
    res.redirect('/')
}

controller.delete = async(req,res) =>{
    const {id} = req.params
    await Task.remove({_id:id}) 
    res.redirect('/');
}

controller.edit = async(req,res) =>{
    const { id } = req.params
    const task = await Task.findById(id)
    res.render('edit',{
        task
    });
}

module.exports = controller;