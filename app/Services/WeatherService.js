import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { Sandbox } from "./AxiosService.js";

class WeatherService {
    async getTheWeather() {
        let res = await Sandbox.get("weather")
        console.log(res.data)
        ProxyState.Weather = new Weather(res.data)
        console.log(ProxyState.Weather);
    }
}

export const weatherService = new WeatherService();