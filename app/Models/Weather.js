export default class Weather {
    constructor({ name, main, weather }) {
        this.name = name
        this.main = main.temp
        this.weather = weather
    }
}