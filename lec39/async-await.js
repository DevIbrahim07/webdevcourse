// question : what will happen if we send 0 in settimeout function in js
// answer : it will not execute immediately, it will execute after the current call stack is empty

// async-await > is ka mtlb ye ye ab asynchronous code ko synchronous code ki tarah likh sakte hain,
// async await k through hm promises ko ache se handle kr sakte hai
// async function hamesha promise return krta he
async function getData() {
  setTimeout(function () {
    console.log("helo data");
  }, 3000);
}

let output = getData();
console.log(output); // output will be a promise because async function always returns a promise

// await?> await is used to wait for a promise to resolve or reject before moving on to the next line of code. It can only be used inside an async function. When we use await, the function will pause until the promise is resolved or rejected, and then it will return the resolved value or throw the rejected error.
