import TodoModel from '../models/todo.model'

const TodoService = {}

TodoService.getAllTodos = () => {
    return TodoModel.find({});
}

export default TodoService