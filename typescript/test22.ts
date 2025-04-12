function custdetails():[number,string,boolean]
{
    let custid:number=100;
    let custname:string='arjun';
    let isindian:boolean=false;
 return [custid,custname,isindian];
}
let res=custdetails();
console.log(res);
var [a,b,c]=custdetails();
console.log(b);