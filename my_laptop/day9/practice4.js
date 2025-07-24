const {MongoClient}=require('mongodb');

const client=new MongoClient("mongodb+srv://root:root@practice.x8zlgwl.mongodb.net/gg")

client.connect().then((client1)=>
{

    client1.db('gg').createCollection('hh').finally(()=>client1.close())
    console.log("datbase created");

})