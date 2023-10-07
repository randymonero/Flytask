const express = require('express'),
router = express.Router(),

task = require('../controller/task_controller')



// localhost:4000/api/tasks
router.get ('/',async (req,res) =>{
    const lists = await task.getAllTasks()
    res.send(lists)
})

router.get ('/:id',async (req,res) =>{
    const list = await task.getTaskById(req.params.id)
    //    if 
    res.send(list)
})

router.delete ('/:id',async (req,res) =>{
    const list = await task.deleteTask(req.params.id)
    console.log(task);
    //    if 
    res.send('task has been deleted')
})

router.post ('/',async (req,res) =>{
    await task.addOrEditTask(req.body)
    //    if 
    res.status(201).send('task has been created succesfully')
})

router.put ('/:id',async (req,res) =>{
    const affectedRows = await task.addOrEditTask(req.body,req.params.id)
    //    if 
    res.send('updated successfully')
})



module.exports = router;