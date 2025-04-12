"use strict";
function custdetails() {
    let custid = 100;
    let custname = 'arjun';
    let isindian = false;
    return [custid, custname, isindian];
}
let res = custdetails();
console.log(res);
var [a, b, c] = custdetails();
console.log(b);
