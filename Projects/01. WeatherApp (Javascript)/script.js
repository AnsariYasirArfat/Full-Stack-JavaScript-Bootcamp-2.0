//  Date & live Time of user location
const userTime = document.querySelector(".userTime");
const userDate = document.querySelector(".userDate");

let date = new Date();
const setdate = new Intl.DateTimeFormat(navigator.language, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);
userDate.textContent = setdate;

setInterval(() => {
  date = new Date();
  const settime = new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
  userTime.textContent = settime;
}, 1000);
