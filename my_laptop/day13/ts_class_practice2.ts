class Student{

    private name:string='';
    private age:number=0;

    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age
        ;

    }

    showData()
    {
        console.log("name="+this.name+",age="+this.age)
    }

}



let  s1=new Student("aakash",21);

s1.showData();