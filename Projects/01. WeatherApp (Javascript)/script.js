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
    // Current weather
    displayCurrentWeatherData();
    // Day report
    todaysForecast = orgData.forecast.forecastday[0];
    displayHourlyWeatherData();
    displayTodayWeatherSummary();

    // Forecast for next week
    nextWeekForecast = orgData.forecast.forecastday;
    displayForecastWeatherForWeek();

    // Changing background color according to local time
    backgroundColorAccLocaltime();
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
    const modal = new bootstrap.Modal(
      document.getElementById("staticBackdrop")
    );
    modal.show();
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

// Hourly updates
const displayHourlyWeatherData = () => {
  // temperatues
  hourlyTemp[0].innerHTML = todaysForecast.hour[0].temp_c;
  hourlyTemp[1].innerHTML = todaysForecast.hour[6].temp_c;
  hourlyTemp[2].innerHTML = todaysForecast.hour[12].temp_c;
  hourlyTemp[3].innerHTML = todaysForecast.hour[15].temp_c;
  hourlyTemp[4].innerHTML = todaysForecast.hour[18].temp_c;
  hourlyTemp[5].innerHTML = todaysForecast.hour[21].temp_c;

  // condition's status
  hourlyLogo[0].src = todaysForecast.hour[0].condition.icon;
  hourlyStatus[0].innerHTML = todaysForecast.hour[0].condition.text;

  hourlyLogo[1].src = todaysForecast.hour[6].condition.icon;
  hourlyStatus[1].innerHTML = todaysForecast.hour[6].condition.text;

  hourlyLogo[2].src = todaysForecast.hour[12].condition.icon;
  hourlyStatus[2].innerHTML = todaysForecast.hour[12].condition.text;

  hourlyLogo[3].src = todaysForecast.hour[15].condition.icon;
  hourlyStatus[3].innerHTML = todaysForecast.hour[15].condition.text;

  hourlyLogo[4].src = todaysForecast.hour[18].condition.icon;
  hourlyStatus[4].innerHTML = todaysForecast.hour[18].condition.text;

  hourlyLogo[5].src = todaysForecast.hour[21].condition.icon;
  hourlyStatus[5].innerHTML = todaysForecast.hour[21].condition.text;

  // wind
  hourlyWind[0].innerHTML = todaysForecast.hour[0].wind_kph;
  hourlyWind[1].innerHTML = todaysForecast.hour[6].wind_kph;
  hourlyWind[2].innerHTML = todaysForecast.hour[12].wind_kph;
  hourlyWind[3].innerHTML = todaysForecast.hour[15].wind_kph;
  hourlyWind[4].innerHTML = todaysForecast.hour[18].wind_kph;
  hourlyWind[5].innerHTML = todaysForecast.hour[21].wind_kph;
};

const displayTodayWeatherSummary = () => {
  // Sun
  sunriseTime.innerHTML = todaysForecast.astro.sunrise;
  sunsetTime.innerHTML = todaysForecast.astro.sunset;

  // Moon
  moonriseTime[0].innerHTML = todaysForecast.astro.moonrise;
  moonsetTime[0].innerHTML = todaysForecast.astro.moonset;
  moonriseTime[1].innerHTML = todaysForecast.astro.moonrise;
  moonsetTime[1].innerHTML = todaysForecast.astro.moonset;

  // Max-Min & Average of the current day
  maxTempToday.innerHTML = todaysForecast.day.maxtemp_c;
  minTempToday.innerHTML = todaysForecast.day.mintemp_c;
  maxWindToday.innerHTML = todaysForecast.day.maxwind_kph;
  todaysLogo.src = todaysForecast.day.condition.icon;
  todayStatus.innerHTML = todaysForecast.day.condition.text;
  rainToday.innerHTML = todaysForecast.day.daily_chance_of_rain;
  snowToday.innerHTML = todaysForecast.day.daily_chance_of_snow;
  avgHumidityToday.innerHTML = todaysForecast.day.avghumidity;
};

// Forecast Weather details
// Button for Forecast info
const buttonForecast = document.querySelector(".buttonForecast");
const buttonText = buttonForecast.textContent;
buttonForecast.addEventListener("click", function () {
  const isExpanded = buttonForecast.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    buttonForecast.textContent = "Summary"; // set to new text
  } else {
    buttonForecast.textContent = buttonText; // set back to original text
  }

  buttonForecast.setAttribute("aria-expanded", !isExpanded); // toggle aria-expanded attribute
});

// Forecast for next week
const displayForecastWeatherForWeek = () => {
  for (let i = 0; i <= 1; i++) {
    weelyDate[i].innerHTML = nextWeekForecast[i + 1].date;
    weeklyMaxTemp[i].innerHTML = nextWeekForecast[i + 1].day.maxtemp_c;
    weeklyMinTemp[i].innerHTML = nextWeekForecast[i + 1].day.mintemp_c;
    weeklystatus[i].innerHTML = nextWeekForecast[i + 1].day.condition.text;
    weeklyIcon[i].src = nextWeekForecast[i + 1].day.condition.icon;
    weeklySunRise[i].innerHTML = nextWeekForecast[i + 1].astro.sunrise;
    weeklySunSet[i].innerHTML = nextWeekForecast[i + 1].astro.sunset;
    weeklyMaxWind[i].innerHTML = nextWeekForecast[i + 1].day.maxwind_kph;
    weeklyAvgHumidity[i].innerHTML = nextWeekForecast[i + 1].day.avghumidity;
    weeklyRainStatus[i].innerHTML =
      nextWeekForecast[i + 1].day.daily_chance_of_rain;
    weeklySnowStatus[i].innerHTML =
      nextWeekForecast[i + 1].day.daily_chance_of_snow;
  }
};

// Changing background color according to local time of searched location
const backgroundColorAccLocaltime = () => {
  let bkgColorTime = orgData.location.localtime.slice(-5, -3);
  const elements = document.querySelectorAll(".bkgColor");
  if (bkgColorTime >= 0 && bkgColorTime <= 5) {
    document.body.style.background =
      "linear-gradient(90deg, rgba(6,18,37,0.8), rgba(5,38,77,0.8), rgba(7,63,126,0.8), rgba(34,76,144,0.8))";
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.background =
        "linear-gradient( #061225, #05264d, #073f7e, #224c90)";
    }
    document.body.style.color = "#c1cfe4";
  }
};
