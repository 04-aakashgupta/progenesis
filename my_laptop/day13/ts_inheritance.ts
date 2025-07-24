class Product
{
    public noOfProduct():number
    {


        return 5;
    }
}

class Shopping extends Product
{


        public noOfProduct():number
    {


        return 7;
    }

    public totalNoOfProduct():number{
        
        return this.noOfProduct()+super.noOfProduct();
    
    }
}


let s1=new Shopping();

console.log("total no of producyt is ",s1.totalNoOfProduct());

