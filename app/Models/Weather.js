export default class Weather {
    constructor({ name, main, weather }) {
        this.name = name
        this.temp = main.temp
        this.icon = weather[0].icon
    }

    get Template() {
        return `
        
        `
    }
}