export default class Quote {
    constructor({ author, content }) {
        this.author = author
        this.content = content
    }

    get Template() {
        return `
        <div class="d-flex flex-column text-center quote my-3">
            <div class>
                <p>${this.content}</p>
            </div>
            <div class="author">
                <p>${this.author}</p>
            </div>
        </div>
        `
    }
}