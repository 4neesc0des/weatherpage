const cityName = document.getElementById("cityName");
const cityOutput = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const weather_info = document.getElementsByClassName("weather_info");
const tempicon = document.getElementById("temp-icon");
const temp = document.getElementById("temp");
const tempMood = document.getElementById("temp_mood");
const dataHide = document.getElementById("main_info");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    cityOutput.innerText = "please type city name";
    dataHide.classList.add("data_hide");
    // weather_info.
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=28b450121710fefac642162db845de46`;
      let data = await fetch(url);
      let result = await data.json();
      // console.log(result);
      let arrData = [result];
      // console.log(arrData);
      cityOutput.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerHTML = `<span>${arrData[0].main.temp}</span> <sup>o</sup>C`;
      tempMood.innerHTML = arrData[0].weather[0].main;

      const tempStatus = arrData[0].weather[0].main;
      if (tempStatus === "Clear") {
        tempicon.innerHTML = `<i class="fa fa-sun" style="color:Orange;"></i>`;
      } else if (tempStatus === "Clouds") {
        tempicon.innerHTML = `<i class="fa fa-cloud"></i>`;
      } else if (tempStatus === "Rain") {
        tempicon.innerHTML === `<i class="fa fa-cloud-rain"></i>`;
      } else {
        tempicon.innerHTML === `<i class="fa fa-cloud"></i>`;
      }

      dataHide.classList.remove("data_hide");
    } catch (error) {
      cityOutput.innerText = `please type city name`;
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);

let currDay = document.querySelector("#day");
let currDate = document.querySelector("#date");
console.log(currDate);

let weatherCon = document.querySelector("#weathercon");
let tempStatus = "sunny";

const getCurrentDay = () => {
  let currentTime = new Date();
  let weekday = new Array(7);

  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thur";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  console.log(currentTime.getDate());

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  currDate.innerHTML = `${currentTime.getDate()}, ${
    month[currentTime.getMonth()]
  }`;


  currDay.innerHTML = `${
    weekday[currentTime.getDay()]
  }, ${hours} : ${minutes} ${ampm}`;
};
setInterval(getCurrentDay, 10000);
window.addEventListener("load", getCurrentDay);
//  `${currentTime.getDate()}  |  ${hours} : ${minutes} ${ampm}`
//  {
//    weekday[currentTime.getDay()];
//  }



// toggle
