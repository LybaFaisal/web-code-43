//producing code

function getWeather(city) {
    return new Promise((resolve, reject) => {
        const cityData = weatherData.cities.find(c => c.name.toLowerCase() === city.toLowercase());

        if (cityData) {
            resolve(cityData);    //the promise is resolved with city data
        }
        else {
            reject(new Error('City not found'));  //the promise is rejected if citydata is not found
        }
    });
}

//consuming code

getWeather('London')
    .then(data => {
        console.log(`weather in ${data.name}: ${data.temp}'C ${data.weather}`);
    })
    .catch(error => {
        console.error(error.message);
    });


//Get elements

const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

//function to fetch weather data from the local json file

function getWeather(city) {
    return fetch('weather.json')   //how to fetcg from json
    
        .then(response => response.json())
        .then(data => {
            //finding city in the json file
            const cityData = data.cities.find(c => c.name.toLowerCase() === city.toLowerCase());

            if (!cityData) {
                throw new error('City not found');
            }
            return cityData;
        });
}

//Event Listener for the form

weatherForm.addEventListener('submit', function (e) {
    e.preventDefault();  //prevent page refresh

    const city = cityInput.value;

    //fetch and display weather data

    getWeather(city)
        .then(data => {
            weatherResult.innerHTML = `<h2>Weather is ${data.name}</h2> 
        <p> Temperature : ${data.temp}'C </p> 
        <p> Condition : ${data.weather} </p> `;
        })

        .catch(error => {
            weatherResult.innerHTML = `<p> Error: ${error.message}</p>`; 
        });
});