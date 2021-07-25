import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { Sandbox } from "./AxiosService.js";

class QuotesService {
    async getAllQuotes() {
        let res = await Sandbox.get("quotes")
        console.log(res.data)
        ProxyState.Quote = new Quote(res.data)
    }
}

export const quotesService = new QuotesService();