const {MongoClient}=require('mongodb');

const uri="mongodb+srv://root:root@practice.x8zlgwl.mongodb.net"

MongoClient.connect(uri)
.then((client)=>
{
    client.db("practice").dropCollection("xyz")
    .then(()=>
    {
        console.log("xyz collection deleted")
    })
    .catch((err)=>console.log(err))
    .finally(()=>client.close())

})