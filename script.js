let weather={
  apiKey:"3642add116c47a9d387d56f3ed99546d",
  fetchWeather: function (city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="
    +city
    +"&units=metric&appid="
    +this.apiKey)
    .then((response)=>response.json())
    .then((data)=>this.displayWaether(data));
  },
  displayWaether: function(data){
    const { name }=data;
    const { icon,description }=data.weather[0];
    const {temp, humidity}=data.main;
    const { speed }=data.wind;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector(".city").innerHTML= "Weather in "+name;
    document.querySelector(".temp").innerHTML= "Temperature is "+temp+"°C";
    document.querySelector(".img").src=`https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".decr").innerHTML= " "+description;
    document.querySelector(".humidity").innerHTML= "Humidity is "+humidity+"%";
    document.querySelector(".wind").innerHTML= "Wind speed "+speed+"km/h";
    document.body.style.backgroundImage="Images/clouds.htm"
  },

  search: function(){
    this.fetchWeather(document.querySelector(".searchbar").value);
  }
}

document.querySelector(".button").addEventListener("click", function(){
  weather.search();
})

weather.fetchWeather("rzeszow");