function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "hh:mm:ss:SSS"
  )}<small>${losAngelesTime.format("A")}</small>`;

  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  cairoDateElement.innerHTML = cairoTime.format("MMMM Do, YYYY");
  cairoTimeElement.innerHTML = `${cairoTime.format(
    "hh:mm:ss:SSS"
  )}<small>${cairoTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1);
