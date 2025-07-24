
//use find(),sort().projection()
const {MongoClient}=require("mongodb");

const uri = "mongodb+srv://root:root@practice.x8zlgwl.mongodb.net/";

MongoClient.connect(uri)
.then((client)=>
{
    client.db("practice").collection("xyz").find({},{projection:{_id:0,name:1,age:1}}).sort({age:-1}).toArray()
    .then
    ((result)=>
        {
            console.log(result);
        })
    .catch(err=>console.log(err))
    .finally(()=>client.close());
})
.catch(err=>console.log(err))
.finally(()=>console.log("program finshed"))
