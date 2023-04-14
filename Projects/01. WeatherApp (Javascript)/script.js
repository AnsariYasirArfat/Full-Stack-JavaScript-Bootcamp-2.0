//  Date & live T  ime of user locationD
const userTime = document.querySelector(".userTime");
const userDate = document.querySelector(".userDate");



const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");


const getData = async (event) => {
  event.preventDefault();
  const city = inputBox.value;

  if (city) {
    // Fetch Details from weather API
    const fetchData = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=aaa0929007ce456e8fb142153232602&q=${city}&days=14`
    );

    orgData = await fetchData.json();
    console.log(orgData);
    // Current weather
    displayCurrentWeatherData();
    // Day report
    todaysForecast = orgData.forecast.forecastday[0];
    displayHourlyWeatherData();
    displayTodayWeatherSummary();

    // Forecast for next week
    nextWeekForecast = orgData.forecast.forecastday;
    displayForecastWeatherForWeek();
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
  </div>
`;

    const modal = new bootstrap.Modal(
      document.getElementById("staticBackdrop")
    );
    modal.show();
  }
};