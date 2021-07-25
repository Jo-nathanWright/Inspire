export default class Weather {
    constructor({ name, main, weather }) {
        this.name = name
        this.temp = main.temp
        this.icon = weather[0].icon
    }

    get Template() {
        return `
        <div>
            <h3>${this.temp}</h3>
            <p>${this.name} <span>↻</span>
        </div>
        `
    }

    get Celsius() {
        return `
        <div>
            <h3>${Math.floor(this.temp - 273.15)}</h3>
            <p>${this.name}</p>
        </div>
        `
    }

    get Fahrenheit() {
        return `
        <div>
            <h3>${Math.floor((this.temp - 273.15) * 9 / 5 + 32)}</h3>
            <p>${this.name}</p>
        </div>
        `
    }
}