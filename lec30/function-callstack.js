// function callstack? >
//stack? aik data structur he . jis mia data LIFO(last in first out) formate mai store hota he. example stack mai hum last mai jo data store karte he wo pehle bahar ata he.
// jb bhi function call hoti he to wo call stack mai push ho jati he . mean entry ho jati he .  aur jb function execute ho jati he to wo call stack se pop (remove) ho jati he.
//function ko first class citizen kaha jata he . iska matlab ye he ke function ko variable mai store kar sakte he , function ko argument ke tor pe pass kar sakte he aur function se return bhi kar sakte he. and use in arrays, objects as well

function a() {
  console.log("a function");
  b();
}

function b() {
  console.log("b function");
  c();
}

function c() {
  console.log("c function");
}

a();
// jab hum a() function call karte he to wo call stack mai push ho jata he
//  . phir a() function ke andar b() function call hota he to wo bhi call
// stack mai push ho jata he . phir b() function ke andar c() function call
//  hota he to wo bhi call stack mai push ho jata he . jab c() function
// execute ho jata he to wo call stack se pop (remove) ho jata he .
// phir b() function execute ho jata he to wo bhi call stack se
// pop (remove) ho jata he . phir a() function execute ho jata he to wo
// bhi call stack se pop (remove) ho jata he . is tarah se hum dekh sakte
// he ke function call stack kaise work karta he.

// now yahapr hum function ko argument ke tor pe pass kar rahe he .
// jab hum greetMe() function call karte he to wo call stack mai push ho jata he
// . phir greetMe() function ke andar greet() function call hota he to wo bhi
// call stack mai push ho jata he . jab greet() function execute ho jata he to
// wo call stack se pop (remove) ho jata he . phir greetMe() function execute
// ho jata he to wo bhi call stack se pop (remove) ho jata he .
function greetMe(greet, fName) {
  console.log("hel");
  greet();
}
function greet() {
  console.log("hwo are u");
}
greetMe(greet);

// jb aik function dusre functon ko return krta he

function outer() {
  return function inner() {
    console.log("inner function");
  };
}
let innerFun = outer();
innerFun(); // jab hum innerFun() function call karte he to wo call stack
//  mai push ho jata he . phir inner() function execute ho jata he to wo
// call stack se pop (remove) ho jata he . is tarah se hum dekh sakte he
// ke function call stack kaise work karta he.

// in arrays
let arr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
  function (a, b) {
    return a * b;
  },
];

let ans = arr[0](2, 3);
console.log(ans);

// objects
let obj = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(obj.add(2, 3));
