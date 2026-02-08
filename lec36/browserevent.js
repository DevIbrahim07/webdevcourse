// browser events > is just an announcement done by browser when something happens
// click, mouseover, mouseout, keydown, keyup, load, unload, scroll, resize
// event listner>is a function that is called when an event occurs
// addEventListener() > is a method that is used to attach an event handler to an element
// syntax> element.addEventListener(event, function, useCapture)
// event> is the name of the event
// function> is the function that will be called when the event occurs
// useCapture> is a boolean value that indicates whether the event should be captured or not
//.addeventlistner()> (event type , function )

let heading = document.getElementById("heading");
heading.addEventListener("click", function () {
  heading.style.color = "red";
});

//example 2
function changeColor() {
  let para = document.getElementById("para");
  para.style.color = "blue";
}

para.addEventListener("click", changeColor);

// remove event listner > is a method that is used to remove an event handler from an element

function removeColorChange() {
  para.removeEventListener("click", changeColor);
}
para.removeEventListener("click", changeColor);

// capturing phase , add terget phase , bubbling phase
// capturing phase > is the phase where the event is captured by the parent element before it reaches the target element
// target phase > is the phase where the event reaches the target element
// bubbling phase > is the phase where the event bubbles up from the target element to the parent element
// by default, events are handled in the bubbling phase, but we can change it to capturing phase by passing true as the third argument in addEventListener() method

// prevent dafuault> used to prevent the default action of an event

let link = document.getElementById("link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Link clicked!");
});

// avoiding too many event listners>
// event delegation > is a technique that is used to handle events at a higher level in the DOM tree rather than attaching event handlers to individual elements

let list = document.getElementById("list");
list.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    event.target.style.color = "green";
  }
});

// event.target> is a property that refers to the element that triggered the event
// performance.now()> is a method that returns the current time in milliseconds, which can be used to measure the time taken by an event handler to execute
let startTime = performance.now();
// some event handler code
let endTime = performance.now();
console.log("Time taken: " + (endTime - startTime) + " milliseconds");
