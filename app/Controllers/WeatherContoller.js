import { weatherService } from "../Services/WeatherService.js";

export default class WeatherController {

    constructor() {
        this.getTheWeather()
    }

    async getTheWeather() {
        try {
            await weatherService.getTheWeather()
        } catch (error) {
            window.alert("We had a problem getting the weather : " + error)
        }
    }
}