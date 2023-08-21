"use strict";
function createUser() {
    return { name: "Ashu", paid: true };
} // if a function returning a object we can assign the object its type in typescript 
function newUser({ name, isPaid }) {
    return `Thank you ${aruser.name}  `;
} // creating a object with a  functions
let aruser = { name: "Ashu", isPaid: true };
console.log(newUser(aruser));
function userOne(user) {
    return { _id: user._id, name: user.name, email: user.email, age: user.age };
}
let newData = userOne({ _id: "123", name: "Don", email: "don@gmail.com", age: 20 });
console.log(newData);
