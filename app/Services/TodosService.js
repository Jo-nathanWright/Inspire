import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { Sandbox } from "./AxiosService.js";

class TodosService {
    async getAllTasks() {
        let res = await Sandbox.get('jonathan/todos')
        console.log(res.data);
        ProxyState.Todo = res.data.map(t => new Todo(t))
    }

    async newTask(rawTask) {
        let res = await Sandbox.post('jonathan/todos', rawTask)
        console.log(res.data);
        ProxyState.Todo = [...ProxyState.Todo, new Todo(res.data)]
    }

    async deleteTask(id) {
        let res = await Sandbox.delete("jonathan/todos/" + id)
        console.log(res.data);
        ProxyState.Todo = ProxyState.Todo.filter(t => t.id != id)
    }

    async updateTask(id) {
        let found = ProxyState.Todo.find(t => t.id == id)

        found.completed = !found.completed

        console.log("Completed From the Service " + found.completed)
        console.log(found);
        let res = await Sandbox.put("jonathan/todos/" + id, found)
        console.log(res.data);
        ProxyState.Todo = ProxyState.Todo
    }
}

const todosService = new TodosService();
export default todosService;