import getFromAPI from './api'


function show() {
    let input = document.getElementById("find");
    input.addEventListener('keydown', event => {

        if (event.key == 'Enter') {
            
            let city = input.value;
            let weather = getFromAPI(city);
            console.log(weather);
            console.log(weather.city);
            /*
            let info = document.getElementById("info");
            let name = document.createElement("div");
            let temp = document.createElement("div");
            name.textContent = weather.city;
            temp.textContent = weather.temperature;
            info.appendChild(name);
            info.appendChild(temp);
            */
        }
    })
}

export { show };