"use strict";
class customerdetails {
    constructor() {
        this.obj = [
            {
                cid: 100, cusname: "raj", address: "chennai"
            },
            {
                cid: 210, cusname: "vijay", address: "hyderabad"
            },
            {
                cid: 300, cusname: "kiran", address: "banglore"
            }
        ];
    }
    display() {
        // code to display all details
        this.obj.forEach(c => {
            console.log(c.cid);
            console.log(c.cusname);
            console.log(c.address);
            console.log("-------------------");
        });
    }
    showbyid() {
        let c = this.obj.filter(c => c.cid == 100);
        console.log(c);
    }
    showbyname() {
        let d = this.obj.filter(d => d.cusname.startsWith('v'));
        console.log(d);
    }
}
let ob1 = new customerdetails();
ob1.display();
ob1.showbyid();
ob1.showbyname();
