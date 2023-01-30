var today = new Date();

// What is the year today?
console.log("The year is: " + today.getFullYear());

// What is the month today as a number?
console.log("The month as a number is: " + (today.getMonth() + 1));

// What is the date today?
console.log("The date is: " + today.getDate());

// What is the day today as a number?
console.log("The day as a number is: " + today.getDay());

// What is the hours now?
console.log("The hours now: " + today.getHours());

// What is the minutes now?
console.log("The minutes now: " + today.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log("The number of seconds elapsed from January 1, 1970 to now is: " +  Math.round(today.getTime()/1000)
);
