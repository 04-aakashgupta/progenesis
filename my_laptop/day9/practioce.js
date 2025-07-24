//use filter document using find & show selected field dt using projection
const {MongoClient}=require('mongodb');
const uri = "mongodb+srv://root:root@practice.x8zlgwl.mongodb.net/";

MongoClient.connect(uri).then((client)=>
{
    // client.db('practice').collection('xyz').insertMany([{name:"amit",age:24,gender:'male'},{name:"sagar",age:22,gender:'male'}])
   client.db('practice').collection('xyz').find({},{projection:{_id:0,gender:1}}).toArray()

    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    .finally(()=>client.close())
    
    
}


).catch(err=>console.log(err))