function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = `${londonTime.format(
      "hh:mm:ss:SS"
    )}<small>${londonTime.format("A")}</small>`;
  }

  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("Africa/Cairo");

    cairoDateElement.innerHTML = cairoTime.format("MMMM Do, YYYY");
    cairoTimeElement.innerHTML = `${cairoTime.format(
      "hh:mm:ss:SS"
    )}<small>${cairoTime.format("A")}</small>`;
  }

  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluDateElement = honoluluElement.querySelector(".date");
    let honoluluTimeElement = honoluluElement.querySelector(".time");
    let honoluluTime = moment().tz("Pacific/Honolulu");

    honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do, YYYY");
    honoluluTimeElement.innerHTML = `${honoluluTime.format(
      "hh:mm:ss:SS"
    )}<small>${honoluluTime.format("A")}</small>`;
  }
}
updateTime();
setInterval(updateTime, 10);

function updateCity(event) {
  function updateCityTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss:SS"
          )}<small>${cityTime.format("A")} </small></div>
        </div>
        <a href="/">All cities</a>
       `;
  }

  updateCityTime();
  setInterval(updateCityTime, 10);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
