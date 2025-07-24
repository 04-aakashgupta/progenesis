
//use find limit
const {MongoClient}=require("mongodb");

const uri = "mongodb+srv://root:root@practice.x8zlgwl.mongodb.net/gg";


MongoClient.connect(uri)
.then((client)=>
{
    client.db('practice').collection("xyz").find().limit(2).toArray()
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    .finally(()=>client.close());

})

.catch(err=>console.log(err))



