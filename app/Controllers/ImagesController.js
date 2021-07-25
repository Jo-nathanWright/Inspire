import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawImage() {
    ProxyState.Image.Template
}

export default class ImagesController {
    constructor() {
        ProxyState.on("Image", _drawImage)
        this.getImage()
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            window.alert("We had a problem getting an image : " + error)
        }
    }
    //document.body.style.image -> w3schools (Styleimageproperty)
}