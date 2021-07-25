import { quotesService } from "../Services/QuotesService.js"
import { ProxyState } from "../AppState.js"

function _drawQuote() {
    document.getElementById('quote').innerHTML = ProxyState.Quote.Template
}

export default class QuotesController {
    constructor() {
        ProxyState.on('Quote', _drawQuote)
        this.getQuotes()
    }

    async getQuotes() {
        try {
            await quotesService.getAllQuotes();
        } catch (error) {
            window.alert("We had a problem getting that Quote : " + error)
        }
    }

}