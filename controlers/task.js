const taskType=[
    { taskTypeId: '1', taskTypeName: 'משימה' },
    { taskTypeId: '2', taskTypeName: 'באג' },
]

const taskList=[
    { taskId: '1', taskTypeId: '1', taskName: 'דוח תלמידים', contactTaskID: '123456789', contactTaskName: 'שרה לוי', isready:false },
    { taskId: '2', taskTypeId: '2', taskName: 'לא מעדכן שמוצר נגמר במלאי', contactTaskID: '112233445', contactTaskName: 'יעקב הלל',isready:false },
    { taskId: '3', taskTypeId: '1', taskName: 'דוחות מורים', contactTaskID: '214903627', contactTaskName: 'יהודית נויגרשל',isready:false }
]
//מציגה את כל המשימות
exports.getAllTasks=(req,res)=>{
    res.send(taskList)
}
// מוחקת משימה
exports.removeTask=(req,res)=>{
const id=req.params.id
const index=taskList.findIndex(x=>x.id===id)
taskList.splice(index,1)
res.send(taskList)
}
//עדכון משימה לפי id
exports.updateTask=(req,res)=>{
const id=req.params.id
const index=taskList.findIndex(x=>x.id===id)
if(index!==-1){
    taskList[index].isready=true
}

}