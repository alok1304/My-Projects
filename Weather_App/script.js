const input_box=document.querySelector(".input-box")
const btn=document.getElementById("btn");
const weatherImg=document.querySelector(".weather-image")
const temp=document.querySelector(".temperature")
const desc=document.querySelector(".description")
const humidity=document.querySelector(".humidity")
const windspeed=document.querySelector(".windspeed")
const location_not_found = document.querySelector(".location_not_found")
const weather_body=document.querySelector(".weather-body");
const bottom = document.querySelector(".weather-data")

async function checkWeather(city){
    const api_key ="50e77c4e6a1c093908b7d806d4472592"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    else{
        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
        bottom.style.display="flex"
        
        temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        desc.innerHTML = `${weather_data.weather[0].description}`;

        humidity.innerHTML = `<i class="fa-solid fa-droplet"></i>  ${weather_data.main.humidity}%`;
        windspeed.innerHTML = `<i class="fa-solid fa-wind"></i> ${weather_data.wind.speed}Km/H`;

        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weatherImg.src = "cloud.png";
                break;
            case 'Clear':
                weatherImg.src = "clear.png";
                break;
            case 'Rain':
                weatherImg.src = "rain.png";
                break;
            case 'Mist':
                weatherImg.src = "mist.png";
                break;
            case 'Snow':
                weatherImg.src = "snow.png";
                break;

        }

    }
    }

  
    
    
    

window.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        checkWeather(input_box.value);
    }
})
btn.addEventListener('click', () => {
    checkWeather(input_box.value);
});

