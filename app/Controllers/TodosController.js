import { ProxyState } from "../AppState.js"
import todosService from "../Services/TodosService.js"

function _drawItem() {
    const Item = ProxyState.Todo
    //console.log(Item);
    let template = ''
    Item.forEach(i => template += i.Template)
    document.getElementById("Tasks").innerHTML = template
}

export default class TodosController {
    constructor() {
        ProxyState.on('Todo', _drawItem)
        _drawItem()
        this.getAllTasks()
    }

    async getAllTasks() {
        try {
            todosService.getAllTasks()
        } catch (error) {
            window.alert("We had a problem getting the Tasks : " + error)
        }
    }

    async newTask(event) {
        try {
            window.event.preventDefault()
            let form = event.target
            let rawTask = {
                description: form.taskName.value
            }
            todosService.newTask(rawTask)
            form.reset()
        } catch (error) {
            window.alert("We had a problem making that task : " + error)
        }
    }
    async deletetask(id) {
        try {
            todosService.deleteTask(id)
        } catch (error) {
            window.alert("We had an problem deleting that task : " + error)
        }
    }
}