const kelvinToCelsius = (kelvin) => {
    return `${Math.round(kelvin - 273.15)}°C`
}

const kelvinToFahrenheit = (kelvin) => {
    return `${Math.round((kelvin - 273.15) * (9/15) + 32)}°F`
}

export { kelvinToCelsius, kelvinToFahrenheit};