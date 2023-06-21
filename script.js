let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//call to API to fetch data
let getWeather = () => {
    let cityValue = cityRef.value;
    //empty search box
    if (cityValue.length == 0) {
        result.innerHTML = 'Please enter a city name';
    }
//search box filled
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        //clear input and find city
        cityRef.value='';
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class='weather'>${data.weather[0].main}</h4>
            <h4 class='desc'> ${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} </h1>
            <div class='temp_container>
            <div>
            <h4 class='title'>min</h4>
            <h4 class='temp'>${data.main.temp_min}</h4>
            </div>
            <div>
            <h4 class='title'>max</h4s>
            <h4 class='temp>${data.main.temp_max}
            </div>
            </div>
            `;
        })
        //invalid city name
        .catch(() => {
            result.innerHTML = `<p class='msg'> City not in our database></p>`;
        });
    }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);

