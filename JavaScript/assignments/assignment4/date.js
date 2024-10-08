/*

// Creating a Date Object //

new Date();
new Date(value);
new Date(dateString);
new Date(year, month, day, hours, minutes, seconds, milliseconds);

// Retriving Date Components //

getFullYear():      Returns the full year (e.g., 2024).
getMonth():         Returns the month (0 for January, 11 for December).
getDate():          Returns the day of the month (1-31).
getHours():         Returns the hour (0-23).
getMinutes():       Returns the minutes (0-59).
getSeconds():       Returns the seconds (0-59).
getMilliseconds():  Returns the milliseconds (0-999).
Formatting Dates

// Manipulating Dates //

setDate():      Adjusts the day of the month.
setFullYear():  Sets the year.
setMonth():     Sets the month.
setHours():     Sets the hour.

*/

const currentDate = new Date();
console.log(currentDate);
const formattedDate = new  Intl.DateTimeFormat('en-us').format(currentDate);
console.log(formattedDate);
const dateFromMilliseconds = new Date(1609459200000);
console.log(dateFromMilliseconds);
const dateFromString = new Date("March 25, 2024");
console.log(dateFromString);
const specificDate = new Date(2023, 10, 13, 5, 30, 22);
console.log(specificDate);