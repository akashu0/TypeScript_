const point: Array<number> = []
const runs: Array<string> = []




function identityOne(val: boolean | string): boolean | string{

    return val
}
function identityTwo(val: any): any{
     
    return val
}
function identityThree<Type>(val: Type): Type{ //type here use as any type  when we invoke the function with value.the generic read the val type and lock the type in function

    return val
}

// identityThree(2)

function identityFour<T>(val: T): T{ 

    return val
}


const getMoreSearchProducts = <T>(products: T[]): T=>{ // generic in arrow functions
        const MyIndex = 3
    //  return products[3]
     return products[MyIndex]
}

function getSearchProducts <T>(product: T[]): T{ //generic in array function
    
    return product[2] 
}

// Narrowing

function printLength(val: string | number){ 
    if(typeof val === "string"){
        console.log(`The length of the string is ${val.length}`);
    }else{
        console.log(`The value is a number: ${val}`);
    }
}

printLength("Hello")
printLength(10)

// The in operator narrowing
interface customer {
    name: string,
    email: string
}
interface isAdmin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account : customer | isAdmin) {
     if("isAdmin" in account){
        return account.isAdmin
     }

}
