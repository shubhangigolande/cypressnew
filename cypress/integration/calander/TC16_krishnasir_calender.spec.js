// inbuild class in js
// e.g Date
// JavaScript stores dates as number of milliseconds since January 01, 1970.

// varible --> new className
let currentDate = new Date()
// console.log(typeof currentDate) // object
// console.log(currentDate)   // 2023-04-05T02:51:09.519Z

// Object have properties & methods ----->

// 1. toString()
// Action = converting object to string
// Return = string

// console.log(currentDate.toString())  // Wed Apr 05 2023 08:21:09 GMT+0530 (India Standard Time)
// console.log(typeof currentDate.toString()) // string

// 2. toLocalString()
// Action = converting object to string
// Return = string

// console.log(currentDate.toLocaleString())  // 5/4/2023, 8:27:20 am
// console.log(typeof currentDate.toLocaleString())  // string

// console.log(currentDate.toLocaleString('default', { month: "short" }))   // Apr
// console.log(currentDate.toLocaleString('default', { month: "long" }))   // April

// CURD operations ---->
// Get methods ===>

//1. getFullYear()	    Get year as a four digit number (yyyy)
// Action = extract fullYear from date Object
// Return = number

// console.log(currentDate.getFullYear())  // 2023
// console.log(typeof currentDate.getFullYear()) // number

//2. getMonth()	    Get month as a number (0-11)
// Jan == 0
// Dec == 11
// Action = extract month from date Object
// Return = number

// console.log(currentDate.getMonth())  // 3
// console.log(typeof currentDate.getMonth()) // number

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[3])  // April
// console.log(months[currentDate.getMonth()]) // April

//3. getDate()	    Get day as a number (1-31)
// Action = extract Date from date Object
// Return = number

// console.log(currentDate.getDate())          // 7
// console.log(typeof currentDate.getDate())  //  number

//4. getDay()	    Get weekday as a number (0-6)
// 0 = Sunday
// 6 = Sat
// Action = extract Day from date Object
// Return = number

// console.log(currentDate.getDay())          // 5
// console.log(typeof currentDate.getDay())  //  number
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[currentDate.getDay()])   // Friday

// //5. getHours()	    Get hour (0-23)
// console.log(currentDate.getHours())  // 8
// //6. getMinutes()	    Get minute (0-59)
// console.log(currentDate.getMinutes())  // 18
// //7. getSeconds()	    Get second (0-59)
// console.log(currentDate.getSeconds())  // 9
// //8. getMilliseconds()  Get millisecond (0-999)
// // 1 sec == 1000 MS
// console.log(currentDate.getMilliseconds())

//-------------------------------------------------------------
// Set methods --->
// we can custmize date & time [we can update the object]
// Use => Custmize time zone

// current time + add
// we can set timezone

//1. setFullYear()	   Set the year (optionally month and day)

// console.log(currentDate)  // 2023-04-08T02:40:34.502Z
// currentDate.setFullYear(2010)
// console.log(currentDate)  // 2023-04-08T02:40:34.502Z
// currentDate.setFullYear(2010, 1, 10)
// console.log(currentDate)  // 2010-02-10T02:42:32.155Z

// //2. setMonth()	   Set the month (0-11)
// console.log(currentDate)  // 2023-04-08T02:44:33.553Z
// currentDate.setMonth(0)
// console.log(currentDate)  // 2023-01-08T02:44:33.553Z

// //3. setDate()	   Set the day as a number (1-31)
// console.log(currentDate)  // 2023-04-08T02:44:33.553Z
// currentDate.setDate(10)
// console.log(currentDate)  // 2023-01-10T02:44:33.553Z

// //4. setHours()	   Set the hour (0-23)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:17:19 GMT+0530 (India Standard Time)
// currentDate.setHours(10)
// console.log(currentDate.toString())  // Sat Apr 08 2023 10:18:08 GMT+0530 (India Standard Time)

// //5. setMinutes()	   Set the minutes (0-59)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:19:11 GMT+0530 (India Standard Time)
// currentDate.setMinutes(20)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:20:14 GMT+0530 (India Standard Time)

// //6. setSeconds()      Set the seconds (0-59)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:19:11 GMT+0530 (India Standard Time)
// currentDate.setSeconds(40)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:21:40 GMT+0530 (India Standard Time)
