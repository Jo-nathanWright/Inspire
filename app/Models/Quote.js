export default class Quote {
    constructor({ author, content }) {
        this.author = author
        this.content = content
    }

    get Template() {
        return `
        <div class="text-center quote">
            <div>
                <p>${this.content}</p>
            </div>
            <div class="author">
                <p>${this.author}</p>
            </div>
        </div>
        `
    }
}