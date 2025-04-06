// // non singleton object
// const bumble = {};
// console.log(bumble);

// // singleton object
const tinderUser = new Object();
(tinderUser.id = "1234"), (tinderUser.name = "Sam");
tinderUser.isLoggedin = true;

// console.log(tinderUser);

const regularUser = {
  email: "ps@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Pratham",
      lastName: "Sharma",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2);

// spread operator
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const user = [
  {
    id: 1,
    name: "p",
  },
  {
    id: 2,
    name: "r",
  },
  {
    id: 3,
    name: "a",
  },
  {
    id: 4,
    name: "t",
  },
];

user[1].name;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser)); //[ '1234', 'Sam', true ]
