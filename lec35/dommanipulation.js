// dom manipulation > js k through html elements ko manupulate krna
// update / delete / add krna

// window object > global object in js . lies in top level of scope chain
// window object ke andar document object hota hai
// document object ke andar html elements hote hai

// windwo.document > html document ko represent karta hai
// window.console.log(document)

// DOM (doucment object model)> html document ko represent karta hai as a tree structure
// BOM(browser object model ) > except the html componets .

// id / classname / tagnanme / queryselector / queryselectorall

// getElementById > id ke basis pe element ko select karta hai
let paraEle = document.getElementById("para");
console.log(paraEle);
// by class name
let headingEle = document.getElementById("h");
// by tag name
let divEle = document.getElementsByTagName("div");
//by query selector> jo sb se phle match hota hai usko select karta hai in case of class name ya tag naem
let para = document.querySelector("#para");
console.log(para);
// query selector all > jo bhi match hota hai usko select karta hai in case of class name ya tag name
let divs = document.querySelectorAll("div");
console.log(divs);

// $0 > console me kisi element pe click krne se uska reference $0 me store ho jata hai

// update existingelement> inner html / outer html / text content / inner text
// inner html > kisi bhi tag ko get / set kr skte hai

let heading = document.getElementById("h");
heading.innerHtml = "<span>heading 1</span>";
console.log(heading);
// outer html > kisi bhi tag ko get / set kr skte hai but it will replace the entire element
heading.outerHtml = "<h1 id='h'>heading 1</h1>";

// text content > sirf text ko get / set kr skte hai
heading.textContent = "heading 1";
// inner text > sirf text ko get / set kr skte hai but it will ignore the hidden text
heading.innerText = "heading 1";

// add new element > create element / append child / insert adjacent html
// create element > new element create karta hai
let newPara = document.createElement("p");

// appnd chid > child hamesha end mai add ho ga 
let div = document.querySelector("div");
div.appendChild(newPara);
// insert adjacent html > kisi bhi position pe new element add kr skte hai
div.insertAdjacentHTML("beforeend", "<p>new para</p>");
div.insertAdjacentHTML("afterbegin", "<p>new para</p>");
div.insertAdjacentHTML("beforebegin", "<p>new para</p>");
div.insertAdjacentHTML("afterend", "<p>new para</p>");
