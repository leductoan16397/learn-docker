const TodoModel = require('../models/todo.model')

getAllTodos = () => {
    return TodoModel.find({});
}

module.exports = { getAllTodos }