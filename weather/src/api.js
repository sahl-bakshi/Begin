const Weather = (data) => {
    return {
        city: data.name,
        temperature: data.main.temp
    }
}

async function getFromAPI() {
    try {
        let city = "riyadh";
        let APIkey = "902a5fc8c8fcf8ecb24976578849edec";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
        let response = await fetch(url, {mode: "cors"});
        let data = await response.json();
        return Weather(data);
    } catch(error) {
        console.log(error);
    }
}

export default getFromAPI;