export default class Weather {
    constructor({ name, main, weather }) {
        this.name = name
        this.temp = main.temp
        this.icon = weather[0].icon
        this.switched = false
    }

    get Celsius() {
        return `
        <div>
            <h3>${Math.floor(this.temp - 273.15)}° C</h3>
            <p>${this.name} <span class="action" onclick="app.weatherController.updateTemp(false)">↺</span></p>
        </div>
        `
    }

    get Fahrenheit() {
        return `
        <div>
            <h3>${Math.floor((this.temp - 273.15) * 9 / 5 + 32)}° F</h3>
            <p>${this.name} <span class="action" onclick="app.weatherController.updateTemp(true)">↺</span></p>
        </div>
        `
    }
}