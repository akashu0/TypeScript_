let score : number | string = 35

score = 44
score = "ak"
// score = false

type User = {
    name : string;
    id : number
}
type Admin = {
    username : string;
    id : number
}
// union type

let rashid: User | Admin = {name: "rashid", id: 564 }

rashid = {username: "hx", id: 564}

//in  function

function id (data : string | number){
    // data.toLowerCase() 
    if(typeof data === "string"){
        data.toLowerCase() 
    }
}

//Array

const data: number [] = [1,2,4,4]
const data1: string [] = ["1", "2", "4", "4"]

const data2: (string | number) [] = [ 1, "2", "4", "4"] // avoid writing string | number or any type
const data3: (string | number | boolean) [] = [ 1, "2", "4", "4", true]

// INTERFACE

interface Customer {
    name: string;
    email: string;
    id: number;
    sayHello(): void;
} 

let newCustomer: Customer = {
    name: "Rashid kozhikode",
    email: "r@gmail.com",
    id : 234,
    sayHello(){
        console.log(`Hello Everyone my name is ${newCustomer.name} i am a new member`)
    }
}

newCustomer.sayHello();

