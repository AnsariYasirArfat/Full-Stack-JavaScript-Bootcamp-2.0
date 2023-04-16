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

// Forecast for next week
const weelyDate = document.querySelectorAll(".weelyDate");
const weeklyMaxTemp = document.querySelectorAll(".weeklyMaxTemp");
const weeklyMinTemp = document.querySelectorAll(".weeklyMinTemp");
const weeklystatus = document.querySelectorAll(".weeklystatus");
const weeklyIcon = document.querySelectorAll(".weeklyIcon");
const weeklySunRise = document.querySelectorAll(".weeklySunRise");
const weeklySunSet = document.querySelectorAll(".weeklySunSet");
const weeklyMaxWind = document.querySelectorAll(".weeklyMaxWind");
const weeklyAvgHumidity = document.querySelectorAll(".weeklyAvgHumidity");
const weeklyRainStatus = document.querySelectorAll(".weeklyRainStatus");
const weeklySnowStatus = document.querySelectorAll(".weeklySnowStatus");