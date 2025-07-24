//object with method or function


let std={
    id:2,
    name:"aakash",
    display:function()
    {
        return this.id+" "+this.name;

    }
}


console.log(std.display());
