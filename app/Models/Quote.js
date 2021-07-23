export default class Quote {
    constructor(quote, description) {
        this.quote = quote
        this.author = quote.author
        this.tags = quote.tags
        this.description = description
    }
}