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
  if (!inputBox.value) {
    alert("Please Enter The City Name");
    return;
  }
  const city = inputBox.value;
  // Fetch Details

  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=aaa0929007ce456e8fb142153232602&q=${city}`
  );

  const orgData = await fetchData.json();
  console.log(orgData);
  // Displaying the Details
  countryName.innerHTML = orgData.location.country;
  stateName.innerHTML = orgData.location.region;
  cityName.innerHTML = city;
  humidity.innerHTML = orgData.current.humidity;
  windSpeed.innerHTML = orgData.current.wind_kph;
  temprature.innerHTML = orgData.current.temp_c;
  logoImage.src = orgData.current.condition.icon;
  weatherStatus.innerHTML = orgData.current.condition.text;
};
