import getFromAPI from './api'
import { kelvinToCelsius } from './convert'

function show() {
    let input = document.getElementById("find");
    input.addEventListener('keydown', async (event) => {
        if (event.key == 'Enter') {
            let name = input.value;
            let data = await getFromAPI(name);
            let city = document.getElementById("city");
            let temp = document.getElementById("temp");
            city.textContent = data.city;
            temp.textContent = kelvinToCelsius(data.temperature);
        }
    })
}

export default show;