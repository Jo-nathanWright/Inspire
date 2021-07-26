import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {
    if (ProxyState.Weather.switched == false) {
        document.getElementById("weather").innerHTML = ProxyState.Weather.Celsius
    } else {
        document.getElementById("weather").innerHTML = ProxyState.Weather.Fahrenheit
    }
}

export default class WeatherController {

    constructor() {
        ProxyState.on('Weather', _drawWeather)
        this.getTheWeather()
    }

    async getTheWeather() {
        try {
            await weatherService.getTheWeather()
        } catch (error) {
            window.alert("We had a problem getting the weather : " + error)
        }
    }

    updateTemp(temp) {
        weatherService.updateTemp(temp);
    }
}