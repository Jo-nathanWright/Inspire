export default class Quote {
    constructor({ author, content }) {
        this.author = author
        this.content = content
    }

    get Template() {
        return `
        <div class="text-center">
            <p>${this.content}</p>
            <p>${this.author}</p>
        </div>
        `
    }
}