function displayWeather(response) {
  let temperatureElement = document.querySelector("#temp-number");
  temperatureElement.innerHTML = response.data.temperature.current;
  console.log(response.data);
  let currentCityElement = document.querySelector("h1");
  currentCityElement.innerHTML = response.data.city;
  console.log(temperatureElement);
}

function search(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  let city = searchCityInput.value;
  let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeather);
}
function formatDay(today) {
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let day = today.getDay();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatDay = days[day];

  return `${formatDay} ${hours}:${minutes}`;
}

let enterForm = document.querySelector("#enter-form");
enterForm.addEventListener("submit", search);

let todayForecastElement = document.querySelector("#today-weather");
let todayWeather = new Date();
todayForecastElement.innerHTML = formatDay(todayWeather);
