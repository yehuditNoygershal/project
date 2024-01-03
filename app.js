const express=require('express')
const taskRouter=require('./routers/task')
const app=express()
app.use('/task',taskRouter)
const Logermidlleware=(req,res,next)=>{
    console.log(`logged ${req.url} ${req.method}`);
    next();
}
app.use(Logermidlleware);

app.listen(8000,()=>{
    console.log("port 8000");
})

