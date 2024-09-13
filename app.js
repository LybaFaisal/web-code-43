//producing code

function getWeather(city){
    return new Promise((resolve, reject) => {    
        const cityData =weatherData.cities.find(c => c.name.toLowerCase() === city.toLowercase());

        if(cityData){
            resolve(cityData);    //the promise is resolved with city data
        }
        else{
            reject(new Error('City not found'));  //the promise is rejected if citydata is not found
        }
    });
}

//consuming code

getWeather('London')
.then(data=>  {
    console.log(`weather in ${data.name}: ${data.temp}'C ${data.weather}`);
})
.catch(error => {
    console.error(error.message);
});