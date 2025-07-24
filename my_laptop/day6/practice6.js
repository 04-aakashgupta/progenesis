//fetch all key,all value and properties


let std={
    id:2,
    name:"aakash",
    subjects:{
        sub1:'english',
        sub2:'maths'
    }
}

// for(let key in  std)
// {
//     console.log(std[key]);
// }

// for(let key in  std)
// {
//     console.log(key);
// }


console.log(Object.keys(std));
console.log(Object.values(std));
console.log(Object.entries(std));