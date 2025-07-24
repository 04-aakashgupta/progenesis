const express = require('express');
const mysql = require('mysql');
const body_parser = require('body-parser');
const ejs=require('ejs');
const path = require('path');
const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


const connection = mysql.createPool(
    {
        host: "localhost",
        user: 'root',
        password: "root",
        database: "college"
    }
)

//common routes
app.get("/", (req, res ) => {
    res.sendFile(__dirname + '/common/home.html')

})

app.get("/admin", (req, res ) => {
    res.sendFile(__dirname + '/admin/home1.html')

})



app.get("/login", (req, res ) => {
    res.sendFile(__dirname + '/common/login.html')

})


app.post("/login-request",(req,res)=>
{
    const email=req.body.email;
    const password=req.body.password;

    console.log(email,password);
    let redirect="/";

    connection.query(`select * from student where email='${email}' and password='${password}' `,(err,result)=>
    {


        console.log(result);
        if(result[0]!==undefined)
        {
        if(password===result[0].password)
        {
           
           redirect='/admin'
            
        }
          }
           res.redirect(redirect)
    })
    

})


// admin student routes start
app.get("/admin/student/update", (req, res) => {
    res.sendFile(__dirname + '/admin/student/update.html')

})

app.get("/admin/student/delete", (req, res) => {
    res.sendFile(__dirname + '/admin/student/delete.html')

})

app.get("/admin/student/register", (req, res) => {
    res.sendFile(__dirname + '/admin/student/register.html')

})




app.get("/admin/student/view",(req,res)=>{

        const query="select *  from student";

        //connection.connect((err)=>
           // {
           // if(err) throw err;
            connection.query(query,(err,result)=>
                {
                if(err) throw err;
                console.log(result);
               
                res.render('admin/student/select.ejs',{student_data:result});
                
            })
            
        //})
        //connection.close();

})




app.post("/student/register-request", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const gender = req.body.gender;
    const city = req.body.city;

    console.log(name, email,password, age, gender, city)


    //connection.connect(function (err) {
      //  if (err) throw err;
        console.log("connection establish successfully");

        const query = `insert into student(sname,gender,city,email,password,age) values('${name}','${gender}','${city}','${email}','${password}',${age})`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect('/admin')
        })


    })

//}

//)

app.post("/student/update-request", (req, res) => {
    const id = req.body.sid;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const gender = req.body.gender;
    const city = req.body.city;

    console.log(id,name, email, age, gender, city)


    //connection.connect(function (err) {
       // if (err) throw err;
       // console.log("connection establish successfully");

        const query =`update student set sname='${name}',gender='${gender}',city='${city}',email='${email}',password='${password}',age='${age}'  where id=${id}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect('/admin')
        })


    })

//}

//)


app.post("/student/delete-request", (req, res) => {
    const id = req.body.sid;

    console.log(id)


    //connection.connect(function (err) {
      //  if (err) throw err;
        console.log("connection establish successfully");

        const query =`delete from student  where id=${id}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect('/admin')
        })


    })

//}

//)



//admin student routes end




//admin batch routes start

app.get('/admin/batch/register',(req,res)=>
{
    res.sendFile(__dirname+"/admin/batch/register.html");
})


app.get("/admin/batch/update",(req,res)=>
{
    res.sendFile(__dirname+'/admin/batch/update.html')
})

app.get('/admin/batch/delete',(req,res)=>
{
    res.sendFile(__dirname+"/admin/batch/delete.html");
})

app.post("/batch/register-request",(req,res)=>
{
    const batch_name=req.body.batch_name;
    const batch_start_date=req.body.batch_start_date;
    const batch_end_date=req.body.batch_end_date;

    connection.query(`insert into  batch(batch_name,batch_start_date,batch_end_date) values('${batch_name}','${batch_start_date}','${batch_end_date}')`,(err,result)=>{
        if(err) throw err;
        res.redirect("/admin");
    });


})

app.post("/batch/update-request",(req,res)=>
{

    const batch_id=req.body.batch_id;
    const batch_name=req.body.batch_name;
    const batch_start_date=req.body.batch_start_date;
    const batch_end_date=req.body.batch_end_date;

    connection.query(`update batch  set batch_name='${batch_name}',batch_start_date='${batch_start_date}',batch_end_date='${batch_end_date}'   where batch_id=${batch_id}`,(err,result)=>
    {
        if(err) throw err;
        res.redirect('/admin');
    });
})


app.post("/batch/delete-request",(req,res)=>
{
    const batch_id=req.body.batch_id;
    connection.query(`delete from batch where batch_id=${batch_id}`,(err,result)=>
    {
        if(err) throw err;
        res.redirect("/admin");
    })
})



app.listen(3000);

console.log("server listen on port 3000");
