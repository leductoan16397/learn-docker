const mongoose = require('mongoose')

const { Schema } = mongoose

const TodoSchema = Schema({
    name: String
})

const TodoModel = mongoose.model("Todo", TodoSchema, "todo")

export default TodoModel 