export default class Image {
    constructor({ url, largeImgUrl }) {
        this.img = url
        this.largeImage = largeImgUrl
    }

    get Template() {
        return document.body.style.backgroundImage = `url('${this.largeImage}')`, document.body.style.backgroundSize = "cover"

    }
}