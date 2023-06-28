function getWeather() {
    var cityInput = document.getElementById('cityInput');
    var city = cityInput.value.trim(); // Elimina espacios en blanco al inicio y al final
  
    // Realiza la solicitud a la API de OpenWeatherMap
    var apiKey = 'e6de68cbf706be50f74669428abef364';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Actualiza el contenido en el elemento weatherInfo con la información obtenida
        var weatherInfo = document.getElementById('weatherInfo');
  
        // Limpia el contenido anterior
        weatherInfo.innerHTML = '';
  
        // Crea elementos para mostrar la imagen, los grados y el estado del tiempo
        var cityName = document.createElement('h2');
        cityName.textContent = data.name;
  
        var weatherImg = document.createElement('img');
        weatherImg.src = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        weatherImg.alt = data.weather[0].description;
  
        var temperature = document.createElement('p');
        temperature.textContent = 'Temperatura: ' + (data.main.temp - 273.15).toFixed(2) + '°C';
  
        var weatherDescription = document.createElement('p');
        weatherDescription.textContent = 'Estado del tiempo: ' + data.weather[0].description;
  
        // Agrega los elementos al contenedor weatherInfo
        weatherInfo.appendChild(cityName);
        weatherInfo.appendChild(weatherImg);
        weatherInfo.appendChild(temperature);
        weatherInfo.appendChild(weatherDescription);
  
        // Limpia el input después de mostrar la información
        cityInput.value = '';
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }
  
  // Autocompletar las palabras en el input
  var cities = ['Ciudad A', 'Ciudad B', 'Ciudad C']; // Agrega aquí las ciudades que deseas autocompletar
  
  function autocompleteCity() {
    var input = document.getElementById('cityInput');
    var currentInput = input.value.toLowerCase();
  
    // Filtra las ciudades que comienzan con el valor actual del input
    var matchingCities = cities.filter(function(city) {
      return city.toLowerCase().startsWith(currentInput);
    });
  
    // Muestra las ciudades coincidentes como sugerencias
    var autocompleteDropdown = document.getElementById('autocompleteDropdown');
    autocompleteDropdown.innerHTML = '';
  
    matchingCities.forEach(function(city) {
      var option = document.createElement('option');
      option.value = city;
      autocompleteDropdown.appendChild(option);
    });
  }
  
  // Agrega el evento 'input' al input de la ciudad para autocompletar mientras se escribe
  var cityInput = document.getElementById('cityInput');
  cityInput.addEventListener('input', autocompleteCity);
  
  
  var cities = ['Ciudad A', 'Ciudad B', 'Ciudad C'];

  function autocompleteCity() {
    var input = document.getElementById('cityInput');
    var currentInput = input.value.toLowerCase();
    var autocompleteDropdown = document.getElementById('autocompleteCities');
    autocompleteDropdown.innerHTML = '';
  
    var matchingCities = cities.filter(function(city) {
      return city.toLowerCase().startsWith(currentInput);
    });
  
    matchingCities.forEach(function(city) {
      var option = document.createElement('option');
      option.value = city;
      autocompleteDropdown.appendChild(option);
    });
  }
  
  var cityInput = document.getElementById('cityInput');
  cityInput.addEventListener('input', autocompleteCity);
  
