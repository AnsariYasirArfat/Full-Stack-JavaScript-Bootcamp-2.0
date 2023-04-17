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

let orgData;
let todaysForecast;
let nextWeekForecast;

const getData = async (event) => {
  event.preventDefault();
  const city = inputBox.value;
  if (city) {
    // Fetch Details from weather API
    const fetchData = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=aaa0929007ce456e8fb142153232602&q=${city}&days=14`
    );

    orgData = await fetchData.json();
    // console.log(orgData);
    // Current weather
    displayCurrentWeatherData();
  } else {
    // Show Modal
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    alertPlaceholder.innerHTML = `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Error</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
          Please enter a city name.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  }
};

// Current Day's Weather details
// Current weather report
const displayCurrentWeatherData = () => {
  cityName.innerHTML = orgData.location.name;
  humidity.innerHTML = orgData.current.humidity;
  windSpeed.innerHTML = orgData.current.wind_kph;
  localTime.innerHTML = orgData.location.localtime.slice(11);
  temperature.innerHTML = orgData.current.temp_c;
  logoImage.src = orgData.current.condition.icon;
  weatherStatus.innerHTML = orgData.current.condition.text;
  countryName.innerHTML = orgData.location.country;
  regionName.innerHTML = orgData.location.region;
  timeZone.innerHTML = orgData.location.tz_id;
};
