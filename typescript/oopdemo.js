"use strict";
class myclass {
    add() {
        return 100;
    }
    // creatingfunction
    hello() {
        console.log("hello girl....");
    }
    // creating a constructor
    constructor() {
        console.log("constructor called");
    }
}
class myclass2 extends myclass {
}
let ob = new myclass2();
ob.hello();
