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


// Current weather report
const inputBox = document.getElementById("inputBox");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const localTime = document.getElementById("localTime");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");
const countryName = document.getElementById("countryName");
const regionName = document.getElementById("regionName");
const timeZone = document.getElementById("timeZone");

// Hourly updates
const hourlyTemp = document.querySelectorAll(".hourlyTemp");
const hourlyLogo = document.querySelectorAll(".hourlyLogo");
const hourlyStatus = document.querySelectorAll(".hourlyStatus");
const hourlyWind = document.querySelectorAll(".hourlyWind");

// today's weather summary
const sunriseTime = document.querySelector(".sunriseTime");
const sunsetTime = document.querySelector(".sunsetTime");
const moonriseTime = document.querySelectorAll(".moonriseTime");
const moonsetTime = document.querySelectorAll(".moonsetTime");
const maxTempToday = document.getElementById("maxTempToday");
const minTempToday = document.getElementById("minTempToday");
const maxWindToday = document.getElementById("maxWindToday");
const todaysLogo = document.getElementById("todaysLogo");
const todayStatus = document.getElementById("todayStatus");
const rainToday = document.getElementById("rainToday");
const snowToday = document.getElementById("snowToday");
const avgHumidityToday = document.getElementById("avgHumidityToday");