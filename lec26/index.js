//  operators in javascript
//  are use to perform operations
// arithmetic / comparison/ logical / ternary/ assignment/ bitwise
// arithmetic +/*// % -  **
let a = 10;
b = 20;
console.log("a + b =", a + b); //30
console.log("a - b =", a - b); //-10
console.log("a * b =", a * b); //200
console.log("b / a =", b / a); //2
console.log("b % a =", b % a); //0
console.log("a ** 2 =", a ** 2); //100

//  pre increment (phle increment bad mai print) and post increment (phle print bad mai increment)
let c = 5;
console.log(++c, " pre increment");

let d = 3;
console.log(d++, "post increment");

//   assignment operatos
let x = 10; // here = is assignment operator
x += 5; // x = x + 5

//  comparison operator is ka answer true or false mai aata hai
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 <= 3); // false
console.log(5 == "5"); // true loose equality operator (here value same ho but type of data alag ho)
console.log(5 === 5); // true is a scrict equality operator (here value bhi same ho and type of data bhi same ho)
console.log(5 != 3); // true
console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false

// ternary operatos (condition ? expr1 : expr2)
let ageee = 18;
let canVote = ageee >= 18 ? " i can vote" : " i cannot vote";

console.log(canVote);

// logical oprators ( &&/ || / !) are use to combine multiple conditiosn
// and operator sb conditions true honi chahiye
let age1 = 20;
let citizen = true;
if (age1 > 18 && citizen === true) {
  console.log(" i can vote");
}

//  or operator mai koi bhi ek condition true ho to chalega

if (age1 > 18 || citizen === false) {
  console.log(" i can vote ");
}
//  not operator true ko false and false ko true bana deta hai
console.log(!true); // false

//  working with non booleans
//  truthy and falsy values??
//  falsy values valuse are : false , 0 , "", null , undefined , NaN ,
// truthy valese any thing which is not falsy
// so  falsy valuse = true value shoudl be falesy

if (0) {
  console.log(" this is truthy value");
}

if ("") {
  console.log("this is falsy value");
}

if (null) {
  console.log("this si faly vlue");
}
if (0 && "helo") {
  console.log("answer is true   ");
}

if (5 || "") {
  console.log(" answer is true");
}
//  short circuitting
//  or operator mai phle true value ko return kr deta ha
//   (false || true ||false || false || true) => true aye ga next false ko check ni krega
console.log(false || false || true || false); // true
console.log(false || 7 || 5 | 10); // 7 aya ge because 7 is truthy value

//  and operator mai phle false value ko return kr deta ha
//  (true && true && false && true) => false aye ga next true ko check ni krega
console.log(true && true && false && true); // false

//  bit wise operators
//  AND(&) , OR(|) , NOT(~) , XOR(^) , LEFT SHIFT(<<) , RIGHT SHIFT(>>)
// and operator(&)  jb bhi dono bits 1 honge tabhi 1 return krega
//  not operator(~)  ye sare bits ko invert kr deta hai 0 ko 1 and 1 ko 0 kr deta hai
// or operator(|)  jb bhi dono bits mai se koi ek bit 1 hogi to 1 return krega
// xor operator(^)  jb dono bits alag honge tabhi 1 return krega
console.log(5 & 3); // 1  (0101 & 0011 = 0001)
console.log(5 | 3); // 7  (0101 | 0011 = 0111)
console.log(~5);
// left shift(<<)  ye bits ko left shift kr deta hai. mean jb bhi kisi number ko left shift krege to wo
// number 2 se multiply ho jae ga
console.log(5 << 1); // 10
console.log(5 << 2); // 20

// right shift(>>) ye bits ko right shift kr deta hai .mean jb bhi kisi number ko right shift krege to wo
// number 2 se divide ho jae ga
console.log(20 >> 1); // 10
console.log(20 >> 2); // 5
