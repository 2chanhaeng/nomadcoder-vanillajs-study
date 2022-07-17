const weatherContainer = document.getElementById("weather");
const city = weatherContainer.querySelector("span:first-child");
const weather = weatherContainer.querySelector("span:last-child");

function onGeoOk(position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`You live in ${lat}, ${lon}`);
    fetch("/keys/openweathermap.json").then(async res =>  {
        const API_KEY = await res.json();
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(url).then(response => response.json()).then(data => {
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
            city.innerText = data.name;
        });
    }).catch(e =>{
        console.log("you got an error", e);
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);