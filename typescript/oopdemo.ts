 interface myinter
 {
    a:string;
    b:number;
    add():number;
 }
 abstract class myclass implements myinter
{
    a:string;
    b:number;
    add():number{
        return 100;
    }

    // creatingfunction
     
    hello()
    {
        console.log("hello girl....");
    }
    // creating a constructor
    constructor()
    {
        console.log("constructor called");
    }
}
class myclass2 extends myclass
{

}
let ob=new myclass2();
ob.hello();
