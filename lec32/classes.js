// classes in javascript ?> is a blueprint . it is a template for creating objects . it is a syntactical sugar over the existing prototype-based inheritance in javascript . it was introduced in es6 .
// class can have class ki property , class k behavior
//Class = blueprint / naqsha
//Object = us naqshay se bana hua real cheez
// class declaration
class Person {
  // peroperty
  age = 30; //public property he mean puri class mai and also class k bahir kahi bhi access kr skte hai
  #weight = 70; // private property mean sirf class k andar hi access kr skte hai
  height = 170;
  // behavior
  eat() {
    console.log("person is eating", this.#weight);
  }
  walk() {
    console.log("person is walking");
  }
}
/// creating object of class
let obj = new Person();
// accessing property and behavior of class
obj.eat();
console.log(obj.age);

// this keyword in class
// is used to refer to current object. ki properties or behavior ko access krne ke liye
//  use hota hai
class Person1 {
  name = "john";
  age = 30;
  eat() {
    console.log(`${this.name} is eating `);
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
}
let obj1 = new Person1();
obj1.eat();
obj1.walk();

// getter and setter in classe
// getter ka mtlb he .johm ne class k andar koi private property banayi he us ko bhir acces/fetch krnahe to getterk through access kr stkte hai
// setter ka mtlb he .johm ne class k andar koi private property banayi he us ko bhir change/modify/update krnahe to setterk through change kr stkte hai
// use fordata protection and encapsulation in class
class Person2 {
  age = 40;
  #w = 50;
  //getter
  get weigh() {
    return this.#w;
  }
  //setter
  set weigh(value) {
    this.#w = value;
  }
}

// constructor in classes

// constructor is a special method that is called when an object is created. it is used to
// initialize the properties of the object. it is defined using the constructor keyword.
// it can take parameters to initialize the properties of the object.
// basically point ye k Ab har person same age ka nahi hota Is liye constructor use karte hain.

class Human {
  age;
  constructor(name, Newage, weight) {
    this.age = Newage;
  }
}

let obj2 = new Human("john", 25);
console.log(obj2.age);
