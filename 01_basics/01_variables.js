const accountId = 144553;
// accountId = 2 => error=> TypeError: Assignment to constant variable.
console.log(accountId);


let accountEmail = "ps@gmail.com";
accountEmail = "Pratham@gmail.com"

/* 
Preferred not to use 
var, because of issue in
block scope and functional scope
*/
var accountPassword = "12345";
accountPassword = "212121"

accountCity = "Khargone";
accountCity = "Bengaluru"

let accountState; //undefined

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// ┌─────────┬─────────────────────┐
// │ (index) │ Values              │
// ├─────────┼─────────────────────┤
// │ 0       │ 144553              │
// │ 1       │ 'Pratham@gmail.com' │
// │ 2       │ '212121'            │
// │ 3       │ 'Bengaluru'         │
// │ 4       │ undefined           │
// └─────────┴─────────────────────┘