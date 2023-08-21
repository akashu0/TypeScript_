function createUser():{name: string, paid: boolean}{
    return {name: "Ashu", paid: true}
}// if a function returning a object we can assign the object its type in typescript 


function newUser({name,isPaid}:{name: string, isPaid:boolean}): string{
    return `Thank you ${aruser.name}  `
}  // creating a object with a  functions

let aruser = {name: "Ashu" ,isPaid : true };

console.log(newUser(aruser))
 //type

type user = {
   readonly _id : string
    name: string,
    email: string,
    age: number
}

function userOne (user : user): user{
    return {_id:user._id ,name:user.name,email:user.email,age:user.age}
}

let newData = userOne({_id:"123",name: "Don", email: "don@gmail.com", age: 20 })
console.log(newData);



