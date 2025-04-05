// array
// 0 based indexing
const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(myArr[0]); //0

const myHeros = ["iron man", "batman", "hulk"];
// console.log(myHeros);
// [ 'iron man', 'batman', 'hulk' ]

const myArr2 = new Array(1, 1, 1, 1);
// console.log(myArr2); //[ 1, 1, 1, 1 ]

// array methods

myArr.push(6); //add elements in array
myArr.push(7); //add elements in array
// console.log(myArr);
// [0, 1, 2, 3, 4, 5, 6 , 7];

myArr.pop(); //remove ements from last
// console.log(myArr);
// [0, 1, 2, 3, 4, 5, 6];

// myArr.unshift(10); // add element at first poistion or 0th index
// console.log(myArr);
// [10, 0, 1, 2, 3, 4, 5, 6];

// myArr.shift(); // remove element at first poistion or 0th index

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(1)); //false

// console.log(myArr);
// [0, 1, 2, 3, 4, 5, 6];

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr); //0,1,2,3,4,5,6
// console.log(typeof newArr); //string

// slice and splice

console.log("A ", myArr);
// A [(0, 1, 2, 3, 4, 5, 6)];

const myn1 = myArr.slice(1, 3);

console.log(myn1); //[1, 2];

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //B [(0, 1, 2, 3, 4, 5, 6)];

console.log(myn2); //[1, 2, 3];

console.log("C ", myArr); //C  [ 0, 4, 5, 6 ]
