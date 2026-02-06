// error > jsi se normal flow of execution distrupt ho jae usko erorr kehte hai
// types of error > compile time & run time
// compile time error>code execute hone se phle hi error a jata ha. pursing k time errro ata he
// run time error>code execute hone k bad error atat he

//compile time example
//console.log('helo); syntax error
//run time error example
//console.log(helo); //ReferenceError

//what is error handling

// try catch block
// try block me code likhte hai jaha error a sakta hai
// catch block me error ko handle karte hai
// finally block> runs on every time me aise code likhte hai jo error aaye ya na aaye dono case me execute hota hai
// custom error, logging, fallback, cleanup etc. working krte hai catch mai

try {
  console.log("helo");
} catch (error) {
  console.log("erro a gaya");
}

// example
try {
  console.log("fun start");
  console.log(x);
  console.log("fun end");
} catch (error) {
  console.log("i am inside catch block");
  console.log("your error is here", error);
} finally {
  console.log("i will run everytime as i am finaly block");
}

// custom error using throw keyword

try {
  console.log("fun start");
} catch (error) {
  throw new Error(" this is a custom error");
  console.log("i am inside catch block");
  console.log("your error is here", error);
} finally {
  console.log("i will run everytime as i am finaly block");
}
