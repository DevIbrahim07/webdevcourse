// fetch api> Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers. It is a replacement for the older XMLHttpRequest.

// request could be > get/post/put/delete/ update
// jsonplaceholder website
async function fetchData() {
  // get request
  // let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // parse json -> is actually a async function
  let data = await response.json();
  console.log(data);
}
fetchData();
// scenario
// prepare url/ endpoint ->async
// await -> (jb data completely aya ga to hi next data ko proce krna he is liye await mark kre ge yaha pr)fetch data ->network request -> async
// process data -> sync

// in olympics > relay race > 1st runner> seconde runner>3rd runnder so await is doning like this . aik execution complete ho gi to dusri start ho gi

async function nameee() {
  let a = await console.log("1");
  let b = await console.log("2");
  let c = await console.log("3");
}

// lets make post request using fetch api
let headers = {
  "Content-Type": "application/json",
};

const url = "https://jsonplaceholder.typicode.com/posts";
let options = {
  method: "POST",
  headers: headers,
  body: JSON.stringify({
    title: "foo",
    body: "bar",
  }),
};
async function getDataPost() {
  const response = await fetch(url, options);
  let data = await response.json();
  console.log("post data", data);
}
getDataPost();

async function getAllData() {
  const response = await fetch(url, options);
  let data = await response.json();
  console.log("get all data", data);
}
getAllData();
