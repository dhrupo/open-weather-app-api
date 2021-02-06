document.getElementById('search').addEventListener('click', () => {
  const cityname = document.getElementById('cityname').value;
  if (!cityname) {
    errorHandler("Please enter a city name");
    return;
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=787782cf355584046bc318521c5b9783&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.name === undefined) {
        errorHandler("Please enter a valid location");
      }
      else {
        document.getElementById('img').style.display = "block";
        document.getElementById('img').style.margin = "0 auto";
        document.getElementById('city').innerText = data.name;
        document.getElementById('temp').innerText = data.main.temp + '°C';
        document.getElementById('weather').innerText = data.weather[0].main;
      }
      document.getElementById('cityname').value = "";
    })
})

function errorHandler(message) {
  document.getElementById('city').innerText = message;
  document.getElementById('temp').innerText = "";
  document.getElementById('weather').innerText = "";
  document.getElementById('img').style.display = "none";
}