"use strict";
let score = 35;
score = 44;
score = "ak";
// union type
let rashid = { name: "rashid", id: 564 };
rashid = { username: "hx", id: 564 };
//in  function
function id(data) {
    // data.toLowerCase() 
    if (typeof data === "string") {
        data.toLowerCase();
    }
}
//Array
const data = [1, 2, 4, 4];
const data1 = ["1", "2", "4", "4"];
const data2 = [1, "2", "4", "4"]; // avoid writing string | number or any type
const data3 = [1, "2", "4", "4", true];
let newCustomer = {
    name: "Rashid kozhikode",
    email: "r@gmail.com",
    id: 234,
    sayHello() {
        console.log(`Hello Everyone my name is ${newCustomer.name} i am a new member`);
    }
};
newCustomer.sayHello();
