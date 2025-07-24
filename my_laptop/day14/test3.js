




async function d1()
{

return new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        console.log("d1")
           resolve();
    },3000)
 
})

}

 async function d2()
{
    
return new Promise((resolve,reject)=>
{

  setTimeout(()=>{
        console.log("d2")
            resolve();
    },2000)


});
}
  

async function run()
{
 await d1();
console.log("adad")

}



run();