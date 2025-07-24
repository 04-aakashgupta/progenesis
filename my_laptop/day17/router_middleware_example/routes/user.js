const express=require('express');
const router=express.Router();


router.use((req,res,next)=>
{
    console.log(`url:${req.url}`)
    next();
})

router.get('/',(req,res)=>
{
    res.send("<h2>this isexample of router middleware</h2>")
})


module.exports=router;