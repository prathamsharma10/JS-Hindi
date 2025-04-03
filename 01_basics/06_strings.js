// const fName = "Pratham"
// const age = 22

// console.log(fName + age + " Male");

// // using backticks

// console.log(`Hello my name is ${fName} and my age is ${age}`);

// // string declaration using new keyword

const fullName = new String("Pratham-Sharma");

console.log(`My name is  ${fullName}`);

// console.log(fullName[0]);

// console.log(fullName.__proto__);

// console.log(fullName.length);

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

console.log(fullName.charAt(4));
console.log(fullName.indexOf("t"));

const newString = fullName.substring(0, 4);
console.log(newString);

const anotherString = fullName.slice(1, 4);
console.log(anotherString);

const stringOne = "      pratham     ";
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://pratham.com/pratham%20sharma";

console.log(url.replace("%20", "-"));

console.log(url.includes("sharma"));
console.log(url.includes("Hello"));

const stringToArray = new String("Pratham-Sharma-10");

console.log(stringToArray.split("-"));
