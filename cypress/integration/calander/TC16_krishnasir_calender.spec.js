//======================================================

// inbuild class in js
// e.g Date
// JavaScript stores dates as number of milliseconds since January 01, 1970.


let currentDate = new Date()
console.log(typeof currentDate) // object
console.log(currentDate)   // 2023-04-05T02:51:09.519Z

1//. toString()
//Action = converting object to string
//Return = string

console.log(currentDate.toString())  // Wed Apr 05 2023 08:21:09 GMT+0530 (India Standard Time)
console.log(typeof currentDate.toString()) // string

//2. toLocalString()
//Action = converting object to string
//Return = string

console.log(currentDate.toLocaleString())  // 5/4/2023, 8:27:20 am
console.log(typeof currentDate.toLocaleString())  // string

console.log(currentDate.toLocaleString('default', { month: "short" }))   // Apr
console.log(currentDate.toLocaleString('default', { month: "long" }))   // April

//Get methods ===>

//1. getFullYear()	    Get year as a four digit number (yyyy)
//Action = extract fullYear from date Object
//Return = number

console.log(currentDate.getFullYear())  // 2023
console.log(typeof currentDate.getFullYear()) // number

//2. getMonth()	    Get month as a number (0-11)
//Jan == 0
//Dec == 11
//Action = extract month from date Object
//Return = number

console.log(currentDate.getMonth())  // 3
console.log(typeof currentDate.getMonth()) // number

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[3])  // April
console.log(months[currentDate.getMonth()]) // April

//3. getDate()	    Get day as a number (1-31)
//Action = extract Date from date Object
//Return = number

console.log(currentDate.getDate())          // 5
console.log( typeof currentDate.getDate())  //  number

//4. getDay()	    Get weekday as a number (0-6)
//5. getHours()	    Get hour (0-23)
//6. getMinutes()	    Get minute (0-59)
//7. getSeconds()	    Get second (0-59)
//8. getMilliseconds()  Get millisecond (0-999)
