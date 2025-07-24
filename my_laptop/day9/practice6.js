
//delete document using deleteOne()
const {MongoClient}=require('mongodb');
const uri="mongodb+srv://root:root@practice.x8zlgwl.mongodb.net"


MongoClient.connect(uri)
.then((client)=>client.db('practice').collection('xyz').deleteOne({age:21}))