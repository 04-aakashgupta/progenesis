const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://root:root@practice.x8zlgwl.mongodb.net"

MongoClient.connect(uri)
    .then((client) => {
        client.db('practice').collection('xyz').
        updateOne({age: '21' }, { $set: {'age': '20' }})
        //  client.db('practice').collection('xyz').find().toArray()
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err))
        .finally(()=>client.close())
    })
    .catch((err)=>console.log(err))
    


