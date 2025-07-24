const express=require('express');

const app=express();

app.use((req,res,next)=>
{
    console.log("my name is aakahs gupta");
    console.log(`${req.url}`)
    next();
})


app.get("/",(req,res)=>
{
    res.send("<h2>this is example of application middleware</h2>")
})


app.listen(3000);