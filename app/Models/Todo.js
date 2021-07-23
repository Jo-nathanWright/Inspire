//This item has the following [state, description, user] -> This can be shown when the box is clicked as [true, 'testing', 'Jonathan']
export default class Todo {
    constructor({ completed, description, user, _id }) {
        this.completed = completed
        this.description = description
        this.user = user
        this.id = _id
    }

    get Template() {
        return `
        <div class="d-flex flex-row">
            <div class="col-3 align-self-center">
                <div class="form-check" id="${this.id}">
                    <input type="checkbox" class="form-check-input" onclick="app.todosController.updateTask('${this.id}')" ${this.isCompleted}>
                    <label class="form-check-label" for="${this.user}">
                        ${this.description}
                </div >
            </div>
            <div class="col-1 align-self-start">
                <button type="submit" class="btn" onclick="app.todosController.deletetask('${this.id}')"> <i class="mdi mdi-delete"></i> </button>
            </div>
            </div>
        `
    }

    get isCompleted() {
        let template = ''
        if (this.completed) {
            template = 'checked'
        } else {
            template = ''
        }
        return template
    }
}