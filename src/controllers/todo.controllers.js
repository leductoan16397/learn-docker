const todoService = require('../service/todo.service.js')

getAllTodos = (req, res) => {
    try {
        const todos = todoService.getAllTodos()
        res.status(200).json({
            todos
        })
    } catch (error) {
        res.status(400)
    }
}

module.exports = { getAllTodos }