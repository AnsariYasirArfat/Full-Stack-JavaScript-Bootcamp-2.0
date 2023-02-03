let month = prompt("Enter the month (1-12):");
let monthName = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (month == "1" || month == "3" || month == "5" || month == "7" || month == "8" || month == "10" || month == "12") {
  console.log(`${monthName[month]} has 31 days.`);
} else if (month == "4" || month == "6" || month == "9" || month == "11") {
  console.log(`${monthName[month]} has 30 days.`);
} else if (month == "2") {
  let year = prompt("Enter the year:");
  ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? console.log(`${year} is leap year & ${monthName[month]} has 29 days.`) : console.log(`${year} is non-leap year & ${monthName[month]} has 28 days.`);
} else {
  console.log(`Invalid month entered.`);
}
