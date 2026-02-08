// event loop>

// The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser's event loop. It continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.
//  This enables asynchronous operations like setTimeout, promises, and DOM events to be handled efficiently.

// what is synchronous code // same time pr execute hojae folow of execute.
//line by line flow of execute
// Synchronous code is executed sequentially, meaning that each line of code must complete before the next one begins. In synchronous programming, tasks are performed one after the other, and if a task takes a long time to complete, it can block the execution of subsequent tasks. This can lead to a poor user experience, especially in web applications, as the interface may become unresponsive while waiting for a long-running task to finish.
// example
console.log("Start");
setTimeout(() => {
  console.log("this is synchrounous code");
}, 3000);

console.log("End");

// asynchronous code // Asynchronous code allows tasks to be executed without blocking the main thread. This means that while one task is being processed, other tasks can continue to run. Asynchronous programming is often used for operations that may take time to complete, such as network requests, file I/O,db connection, event listner, or timers. In JavaScript, asynchronous code can be implemented using callbacks, promises, or async/await syntax.

// example
console.log("Start");
setTimeout(() => {
  console.log("aysnchrounous code");
}, 4000);
console.log("End");
// call stack > jo bhi functios create hote hai un ki entry hotiha call stack mai and jb function execute hota he to wo call stack se remove ho jata he
// browser apne event loop ke through call stack ko continuously check karta hai aur jab call stack empty hota hai to wo call back queue se task ko call stack mai le aata hai aur execute karta hai
// call back queue or task queue> jb bhi asysnchrounous code execute hota he to wo call back queue mai jata he and jb call stack empty hota he to event loop call back queue se task ko call stack mai le aata he and execute karta he
// so sysnchrounous code ko call stack maihi handle kai jata he
// and asysnchrounous code ko event loop mai handle kai jata he

// use loupe toole for practicle example
