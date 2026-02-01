// function is a block of code used to perform specific task

// funciton defination
function greet(fName) {
  console.log("helo" + fName);
}
// function calling
greet("jon");

function count() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
count();

// with parameters
function sum(a, b) {
  let result = a + b;
  console.log("the sum is ", result);
}
sum(4, 5);

// return function? jo muje kch return krta ho.return aik asa keyword he jis ne is function ko call kiya he mere agee jo bhi
// value he wo return kr do ga
function getSum(a, b) {
  return a + b;
  //   unreachable code .kabhi chale ga hi nai error aye ga
}
let r = getSum(4, 8); // so value to return ho gai and us ko kisi variable ami store kre ge
console.log(r);

// function declaration
function myFunc() {
  console.log("this is my function");
}

// function expression > kissi variable mai function ko store krna
let getMul = function (a, b) {
  return a * b;
};

let multiply = getMul(4, 5);
console.log(" answer si ", multiply);
//  arrow     function

let getDiv = (a, b) => {
  return a / b;
};

let division = getDiv(20, 4);
console.log(division, "this is division");
