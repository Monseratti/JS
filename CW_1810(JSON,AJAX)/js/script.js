let APIkey = `d8ca40dcc111798aa0ae8663330f7f39`;
let container = document.getElementsByClassName("hourlyWeather")[0];

var myWeather;
var myHourlyWeather;

function fillWeather() {
  // city
  document.getElementById(
    "cityName"
  ).innerText = `${myWeather.name.toUpperCase()}`;
  // time
  document.getElementById("currTime").innerText = new Date().toLocaleString();
  // weather description
  document.getElementById(
    "weatherDescr"
  ).innerText = `${myWeather.weather[0].description[0].toUpperCase()}${myWeather.weather[0].description.slice(
    1
  )}`;
  // weather image
  document.getElementById(
    "imgWeather"
  ).style.backgroundImage = `url("http://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png")`;
  //   temperarture
  let temp = Math.round(myWeather.main.temp);
  document.getElementById("currTemp").innerHTML = `${
    temp >= 0 ? "+" : "-"
  }${temp} &#8451;`;
  //   statistic
  document.getElementById("minTemp").innerHTML = "Min temperature: ";
  document.getElementById("minTempValue").innerHTML = `${Math.round(
    myWeather.main.temp_min
  )}&#8451;`;
  document.getElementById("maxTemp").innerHTML = "Max temperature: ";
  document.getElementById("maxTempValue").innerHTML = `${Math.round(
    myWeather.main.temp_max
  )}&#8451;`;
  document.getElementById("windSpeed").innerHTML = "Wind speed (km/h): ";
  document.getElementById("windSpeedValue").innerHTML = `${Math.round(
    myWeather.wind.speed
  )}`;
}

{
  /* <div class="col">
          <div class="row">Sunday</div>
          <div class="row myWeatherImg"></div>
          <div class="row">Forecast</div>
          <div class="row">Temp</div>
          <div class="row">Wind</div>
        </div> */
}

function dayToText(number_day) {
  switch (number_day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thirsday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return false;
  }
}

function fillHourlyWeather() {
  let carousel = document.createElement("div");
  let carblock = document.createElement("div");
  for (let i = 0; i < myHourlyWeather.list.length; i++) {
    let date = new Date(myHourlyWeather.list[i].dt_txt);
    let thisDay = date.getDay();
    carousel.classList.add("carousel-item");
    if (i == 0) carousel.classList.add("active");
    carblock.classList.add("carBlock");
    let mainCol = document.createElement("div");
    mainCol.className = "d-inline-block";
    {
      let dayRow = document.createElement("div");
      dayRow.className = "row";
      dayRow.innerHTML = `${dayToText(
        date.getDay()
      )}, ${date.toLocaleDateString()} ${date.getHours()}:00`;
      mainCol.appendChild(dayRow);
    }
    {
      let imageRow = document.createElement("div");
      imageRow.classList.add("row");
      imageRow.classList.add("myWeatherImg");
      imageRow.style.backgroundImage = `url(http://openweathermap.org/img/wn/${myHourlyWeather.list[i].weather[0].icon}@2x.png)`;
      mainCol.appendChild(imageRow);
    }
    {
      let forecastRow = document.createElement("div");
      forecastRow.className = "row";
      forecastRow.innerHTML = `${myHourlyWeather.list[
        i
      ].weather[0].description[0].toUpperCase()}${myHourlyWeather.list[
        i
      ].weather[0].description.slice(1)}`;
      mainCol.appendChild(forecastRow);
    }
    {
      let tempRow = document.createElement("div");
      tempRow.className = "row";
      tempRow.innerHTML = `${Math.round(
        myHourlyWeather.list[i].main.temp
      )}&#8451;`;
      mainCol.appendChild(tempRow);
    }
    {
      let windRow = document.createElement("div");
      windRow.className = "row";
      windRow.innerHTML = `${Math.round(
        myHourlyWeather.list[i].wind.speed
      )} km/h`;
      mainCol.appendChild(windRow);
    }
    carblock.appendChild(mainCol);
    if((i+1)%6==0){
      carousel.appendChild(carblock);
      container.appendChild(carousel);
      carblock = document.createElement("div");
      carousel = document.createElement("div");
    }

  }
}

function weatherRequest() {
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.responseType = "json";
  request.open(
    "get",
    `https://api.openweathermap.org/data/2.5/weather?q=${
      document.getElementById("searchInp").value
    }&appid=${APIkey}&units=metric`
  );
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      myWeather = request.response;
      fillWeather();
      weatherHourlyRequest();
    }
  };
}

function weatherHourlyRequest() {
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.responseType = "json";
  request.open(
    "get",
    `https://api.openweathermap.org/data/2.5/forecast?q=${
      document.getElementById("searchInp").value
    }&appid=${APIkey}&units=metric`
  );
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      myHourlyWeather = request.response;
      fillHourlyWeather();
    }
  };
}

document.getElementById("myButton").addEventListener("click", weatherRequest);

document.getElementsByName("theme").forEach((el) => {
  el.addEventListener("change", function () {
    if (el.value == 1) {
      document.getElementsByTagName("body")[0].classList.remove("bg-light");
      document.getElementsByTagName("body")[0].classList.remove("text-black");
      document.getElementsByTagName("body")[0].classList.add("bg-dark");
      document.getElementsByTagName("body")[0].classList.add("text-white-50");
    }
    if (el.value == 0) {
      document.getElementsByTagName("body")[0].classList.remove("bg-dark");
      document
        .getElementsByTagName("body")[0]
        .classList.remove("text-white-50");
      document.getElementsByTagName("body")[0].classList.add("bg-light");
      document.getElementsByTagName("body")[0].classList.add("text-black");
    }
  });
});
