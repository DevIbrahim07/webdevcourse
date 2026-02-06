// variavle scoping?> jb hm variable create krte hai
/**
 * global scope
 * function scope
 * block scope
 */

// global scope
// can be accesabel in entire file
var a = 10;
let b = 3;
const c = 4;

console.log(a);
function h() {
  console.log(a);
}
{
  console.log(a);
}
if (true) {
  console.log(a);
}

// funcition scope
// can be accesabel in entire function
function sayHello() {
  var name = "abc";
  console.log("heloooo", name);
}
sayHello();
// console.log(name); // error . name is not defined

// block scope
// can be accesabel in entire block
// var variable is not a block scope but let and const are block scope
if (true) {
  let a = 30;
  console.log(a);
}

console.log(a);
