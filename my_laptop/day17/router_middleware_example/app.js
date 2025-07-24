const express=require('express');

const app=express();


const userRoutes=require('./routes/user');


app.use("/user",userRoutes)

app.get('/',(req,res)=>
{
    res.send("<h2>this is home page</h2>")
})


app.listen(3000);