// example of Typescript

let user = {name: "Abhilash..",age: 330, email:"abhikakkanade@gmail.com"}

let hai : string = "Hello world"

console.log(hai.toLowerCase())
console.log("ABhilash.................");

console.log(user.email);

//Number
let userid: number = 33743

userid.toFixed()

//boolean

let isloggedIn: boolean = true

// any (As Documentation suggest don't use any type because it is turning off all the strictness that typescript provide )
let hero: string;
// let hero: any;
function getHero(){
    return "thor"
}
hero = getHero()

// function in typescript

function addTwo(num: number): number { //after function argument putting full colum with type defining means that the function only return number type.
    return num + 2
// return "Hello" [we can also write a function return type.]
}

function logInUser(name : string,email : string,block : boolean ){}

let log = (name : string, email : string,block : boolean = false )=>{}

// function (isVal: number){
//     if(isVal > 2){
//         return false
//     }
//     return "correct"
// } it would be happen in functions returning  different types of values

const getHello = (s : string): string=>{
    return ""
} //arrow function returning syntax

// const heros = ["thor", "batman", "superman"]
const heros = [2, 4, 6]

heros.map((hero): string =>{
    return `hero is ${hero}`
})

function consoleError(msg : string): void {
    console.log(msg);   
}
function handlerError(msg : string): never {
         throw  new Error(msg);   // The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
}
let value = addTwo(2) // addTwo("2") because a num parameter we assign type as number not as string. if u pass a string it throw error
logInUser("Abhilash.......","S@gmail.com", true)
log('A','aa@gamil.com')



