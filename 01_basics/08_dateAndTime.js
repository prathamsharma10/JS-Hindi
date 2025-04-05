let myDate = new Date();
// console.log(myDate);  2025-04-04T04:13:50.003Z

// console.log(myDate.toString()); //Fri Apr 04 2025 09:44:29 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Fri Apr 04 2025
// console.log(myDate.toLocaleString()); //4/4/2025, 9:46:14 am
// console.log(myDate.toLocaleDateString()); //4/4/2025

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025, 0, 25, 5, 3); //month start from 0 in js
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString()); //Sat Jan 25 2025

// console.log(myCreatedDate.toLocaleString()); //25/1/2025, 5:03:00 am

// let newDate = new Date("2025-01-15"); // yy-mm-dd
// console.log(newDate.toLocaleString()); //15/1/2025, 5:30:00 am

let newDate = new Date("01-15-2025"); // mm-dd-yy
// console.log(newDate.toLocaleString()); //15/1/2025, 5:30:00 am

let myTimeStamps = Date.now();

// console.log(myTimeStamps); //1743740589484

// console.log(newDate.getTime()); //1736879400000

// console.log(Math.floor(Date.now() / 1000)); //1743740752

let dateNew = new Date();
// console.log(dateNew);
// console.log(dateNew.getFullYear());
// console.log(dateNew.getDate());
// console.log(dateNew.getDay());
// console.log(dateNew.getMonth() + 1);

dateNew.toLocaleString("default", {
  weekday: "long",
  timeZone: "",
});
