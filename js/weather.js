function onGeoOk(position) {
    const API_KEY = "84825ce1b2aff63a4614fc88f91c74ef"
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    console.log(`You live in ${lat} ${lng}`)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then(r => r.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`
        })
}

function onGeoError() {
    alert("Can't find you. no weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)