//This item has the following [state, description, user] -> This can be shown when the box is clicked as [true, 'testing', 'Jonathan']
export default class Todo {
    constructor({ completed, description, user }) {
        this.completed = completed
        this.description = description
        this.user = user
    }
}