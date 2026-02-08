// promises> asynchronous operation ki returning values ko handle krne k liye use hota he
// promises 3 states me hota he
// 1. pending (initial state)
// 2. fulfilled (operation successful)
// 3. rejected (operation failed)
// promise create krne k liye new Promise() constructor ka use krte he
// promise constructor ek function leta he jisme do parameters hote he resolve and reject
// resolve function ko call krte he jab operation successful hota he aur reject function
//  ko call krte he jab operation fail hota he

// example
let firstPromise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
    console.log("succes promise");
  } else {
    reject(new Error("failed"));
    console.log("failed promise");
  }
});

//example 2 just asynchronous function
function sayMyName() {
  console.log("name is ");
}

setTimeout(sayMyName, 3000); // setTimeout ek asynchronous function he jo specified time ke baad callback function ko execute krta he

// example 3 using promise to handle asynchronous function
function Name() {
  console.log("name is ");
}
let secondPromise = new Promise((resolve, reject) => {
  setTimeout(Name, 3000);
  resolve("name is ali");
});

// promise fullfil ho ga to > .then() method use kre ge and agr promise reject ho ga to > .catch() method use kre ge

let promiseOne = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation was successful");
  } else {
    reject("Operation failed");
  }
});

promiseOne
  .then((message) => {
    console.log("then ka message", message);
  })
  .catch((error) => {
    console.log("catch an errror", error);
  });

// we can use multipe .then() and .catch() methods to handle multiple promises

// promise .all() method use krte he jab hume multiple promises ko handle krna hota he aur unke results ko ek sath lena hota he
let promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise A resolved");
  }, 2000);
})
  .then((message) => {
    console.log("then ka message", message);
  })
  .catch((error) => {
    console.log("catch an errror", error);
  });
let promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise B resolved");
  }, 3000);
});

Promise.all([promiseA, promiseB])
  .then((messages) => {
    console.log("All promises resolved", messages);
  })
  .catch((error) => {
    console.log("One or more promises rejected", error);
  });
