const API_key = "128f0b7659027831001a492b7fed8b50";

function weaSuccess(userInformation) {
    const latitude = userInformation.coords.latitude;
    const longitude = userInformation.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`;
    fetch(url)
        .then((response)=>response.json())
        .then((userData)=>{
            const weaIconCode = userData.weather[0].icon;
            const weaIcon = document.querySelector(".wea-icon img");
            const area = document.querySelector(".area");
            const weather = document.querySelector(".weather");
            const tempCurrent = document.querySelector(".temp-current");
            const maxTemp = document.querySelector(".temp-maxmin div:first-child");
            const minTemp = document.querySelector(".temp-maxmin div:last-child");
            weaIcon.src = `wea-img/${weaIconCode}.png`;
            area.innerText = userData.name;
            weather.innerText = userData.weather[0].main;
            tempCurrent.innerText = `${userData.main.temp}°`;
            maxTemp.innerText = `최고:${userData.main.temp_max}°`;
            minTemp.innerText = `최저:${userData.main.temp_min}°`;
        })
}


function weaError() {
    alert("위치를 못 찾겠다 꾀꼬리~");
}


navigator.geolocation.getCurrentPosition(weaSuccess, weaError);
