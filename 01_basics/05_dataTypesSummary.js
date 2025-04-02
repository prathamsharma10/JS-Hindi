// JS is dynamically Typed language

// Primitive Data Types

// 7 types:-
// String, Number, Boolean, null, undefined, symbol, bigint

let fName = "pratham";
const num1 = 100;
const num2 = 100.34;

const outsideTemp = null;
let state; //undefined

const id = Symbol("123");
const newId = Symbol("123");
console.log(id === newId); //false
console.log(typeof id); //symbol

const bigNum = 12123123123131311n;
console.log(typeof bigNum); //bigint

// Reference type(non-primitive)

// Arrays, Objects, Functions

const heros = ["ironman", "captain america", "thor", "hulk"];

let myObj = {
  fName: "Pratham",
  lName: "Sharma",
  age: 22,
};

let myFun = function () {
  console.log("Hello World");
};

console.log(heros);
// [ 'ironman', 'captain america', 'thor', 'hulk' ]

console.log(myObj);
// { fName: 'Pratham', lName: 'Sharma', age: 22 }

myFun(); //Hello World

console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFun); //function

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
