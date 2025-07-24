class Parent
{

   protected original_name:string="gopal";
   protected name=this.original_name;


   getName():string
   {
    return this.original_name;

   }




}


class Child extends Parent
{
    protected name:string="aakash";



    showName():void
    {
        console.log("parent class name "+super.getName());
                console.log("child class name "+this.name);

    }
}




let n1=new Child();

n1.showName();