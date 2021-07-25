import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { Sandbox } from "./AxiosService.js";

class ImagesService {
    async getImage() {
        let res = await Sandbox.get('images')
        console.log(res.data);
        ProxyState.Image = new Image(res.data)
    }

}

export const imagesService = new ImagesService();