let getCity = ()=>
{
    let citybox = document.getElementById("city");
    let city =citybox.value;
    if(city==="")
    {
        alert("city cannot be empty");
        return;
    }
    fetchWeather(city);
}
let fetchWeather = async (city)=>
{
    let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ed570ac911dad2a255e2965a53ced74&units=metric`)
    if(!response.ok)
    {
        alert("city not found");
        return;
    }
    let data = await response.json();
    showWeather(data)
}
let showWeather= (data)=>
{
    let { name, sys, main ,weather, wind} = data;
    let weatherbox=document.getElementById("weather");
    
      weatherbox.innerHTML = `<h2>Weather in ${name}, ${sys.country}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" class="weather-icon" alt="Weather Icon">`;
   
    console.log(data);
}



