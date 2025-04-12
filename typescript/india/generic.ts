function swap<T>(a:T,b:T)
{
    let c=a;
    a=b;
    b=c;
    console.log(a);
    console.log(b);


}
swap(10,20);
swap("rohi","manu");