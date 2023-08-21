"use strict";
const point = [];
const runs = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(2)
function identityFour(val) {
    return val;
}
const getMoreSearchProducts = (products) => {
    const MyIndex = 3;
    //  return products[3]
    return products[MyIndex];
};
function getSearchProducts(product) {
    return product[2];
}
// Narrowing
function printLength(val) {
    if (typeof val === "string") {
        console.log(`The length of the string is ${val.length}`);
    }
    else {
        console.log(`The value is a number: ${val}`);
    }
}
printLength("Hello");
printLength(10);
