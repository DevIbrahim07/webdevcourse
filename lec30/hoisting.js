// hoisting> aik asa process he jo variabel declaration (var keyword) / function declaration ko shift kr deta he
// to the top of their scope.
/**
 *
 *
 */
// by usng function declaration
function sayName(fName) {
  console.log(fName);
}

sayName("Ibrahim");

/**
 * sayName("Ibrahim");
 function sayName(fName) {
  console.log(fName);
}
no errror . function k sath us ko logic bhi shift kr deta he

 */
console.log(age); // undefined aye ga bcz variable ki declaration current scope mai top pr shift ho jati he like var age, value shift nai hogi
var age = 34;
console.log(age);

// by using let and const??? kia ho ga ??

let agee = 23;
console.log(agee);
// but if

console.log(age2);
let age2 = 22; // ReferenceError: Cannot access 'age2' before initialization

// same for const
console.log(age3);
const age3 = 21; // ReferenceError: Cannot access 'age3' before initialization

// so we always choose let and const and not use var bcz debugging mai problem hoti he var k sath

// agr hm function ko create krte hai by using funciton expression and arrow funciton then waha pr hoisting nai ho gi . just by function declaration ho ko use kr k hm hoisting kr pae ge.

// by using function expression
say("Ibrahim"); //ReferenceError: Cannot access 'say' before initialization
let say = function (fName) {
  console.log(fName);
};

// by using arrow function
arrow("Ibrahim"); // ReferenceError: Cannot access 'arrow' before initialization
let arrow = (fName) => {
  console.log(fName);
};

// let say agr function expression hi var keyword k sath declaire kia he
// to wo hoisting kr jae ge but just declaration jae gi top of the scope
// mai value shift nai ho gi. if agr let/ constk sath kre ge to nai hogi
//s
//console.log(s); undefined
var s = function (fName) {
  console.log(fName);
};
s();

// class?? kia ho ga ?? is mai bhi hoisting nai ho gi
let obj = new Person(); // ReferenceError: Cannot access 'Person' before initialization
class Person {}
