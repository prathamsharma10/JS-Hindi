const marvel_heros = ["hulk", "thor", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);
// ["hulk", "thor", "spiderman", ["batman", "superman", "flash"]];

// const all_heros = marvel_heros.concat(dc_heros);
// // This method returns a new array without modifying any existing arrays.

// console.log(all_heros);
// // [ 'hulk', 'thor', 'spiderman', 'batman', 'superman', 'flash' ]

//spread operator = > [...]
const all_newHeros = [...marvel_heros, ...dc_heros];
// console.log(all_newHeros);
//[ 'hulk', 'thor', 'spiderman', 'batman', 'superman', 'flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usable_anotherarray = another_array.flat(Infinity);
// make or check depth of array and create single array
console.log(usable_anotherarray);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5];

console.log(Array.isArray("Pratham")); //false

console.log(Array.from("Pratham"));
// form create values into array
// ["P", "r", "a", "t", "h", "a", "m"];

console.log(Array.from({ name: "Pratham" }));
// [] => interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// [100, 200, 300];
