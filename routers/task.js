const express=require('express')
const router=express.Router()

const {getAllTasks,removeTask,updateTask}=require('../controlers/task')

router.get('/',getAllTasks)
router.delete('/:id',removeTask)
router.put('/:id',updateTask)

module.exports=router;

