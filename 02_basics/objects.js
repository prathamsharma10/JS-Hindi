// singleton
// Object.create

// object literals

const mySym = Symbol("Key1");
const jsUser = {
  fName: "Pratham",
  fullName: "Pratham Sharma",
  [mySym]: "MyKey1",
  age: 22,
  location: "khargone",
  email: "PS@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Friday"],
};

// console.log(jsUser.fName);
// console.log(jsUser.fullName);
// console.log(jsUser.age);
// console.log(jsUser.email);
// console.log(jsUser.isLoggedIn);
// console.log(jsUser.lastLoggedInDays);

// // another way to access object

// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// jsUser.age = "20";
// console.log(jsUser.age);
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS User");
};
jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.fName}`);
};

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
