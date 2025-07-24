const express=require('express');
const body_parser=require('body-parser');

const app=express();

app.use(body_parser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/source/html/index.html")
})

app.post('/sumbit-student-data',(req,res)=>{
    res.send(`<h1>Your First Name:${req.body.first_name}</br> Your Last Name:${req.body.last_name}<h1>`)
})



app.listen(3000);