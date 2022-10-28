function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "hh:mm:ss:SSS"
    )}<small>${losAngelesTime.format("A")}</small>`;
  }
}

let cairoElement = document.querySelector("#cairo");
if (cairoElement) {
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  cairoDateElement.innerHTML = cairoTime.format("MMMM Do, YYYY");
  cairoTimeElement.innerHTML = `${cairoTime.format(
    "hh:mm:ss:SSS"
  )}<small>${cairoTime.format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
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
            "hh:mm:ss:SSS"
          )}<small>${cityTime.format("A")} </small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
