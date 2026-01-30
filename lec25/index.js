// var keyword examples
// ye debugging mai issue create krta he
// here var allows redeclaration/ reassign / redefine and hoisting
var namee = "ali";
console.log(namee);
var name = "ahmed";
console.log(namee);

var age = 20;
if (true) {
  console.log(age);
}

function solve() {
  var age = 30;
  console.log(age);
}
// console.log(age); here gets error it is a function scope
solve();

// let keyword examples
// here let does allow blocked scope mean block k andr accessable he and  not allow redeclaration but allows
// reassign / redefine and no hoisting
//
{
  let a = 10;
  console.log(a);
}
// console.log(a); create error due to block scope

let b = 20;
// let b = 30  create errror due to redecleartion
// but we can  do reassignmetn
b = 30;
let city = "karachi";

a = 2;
a = "ali";
a = true;
console.log(a);

//  const keyword examples
// here const does allow blocked scope mean block k andr accessable he and  not allow redeclaration
// but not allows reassign / redefine and no hoisting
{
  const pi = 3.14;
  console.log(pi);
}
const course = "java";
// const course = "python" create error due to redecleartion
// but we can not do reassignmetn
// course = "python" create error due to reassignment

//  so lets talk about variable naming conventions
// should be meaningful
// use camel case
// should not start with number
// should not a reserver keyword
// no special char allowed except _ and $

// DAta types
// two types of  data types
//  premetive data types  > number, string, boolean , null , undefined , symbol , bigint
//  non preetive data types > objects, arrays, functions

let marks = 20; // number
let sName = " ali"; // string
let isLogIn = true; // boolean
let temp = null; // null value is assigned to null value variable
let result; // undefined mean no value assigned koi value insert hi nai ki
let id = Symbol("124"); // symbol
let bigNumber = BigInt(123456789012345678901234567890); // bigint

const arr = [1, 2, 3]; // array
const obj = { name: "ali", age: 30 }; // object
function greet() {
  console.log("helo");
}
