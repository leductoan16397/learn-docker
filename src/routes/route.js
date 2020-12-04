import todoRouter from './todo.routes'


const routes = (app) => {
    app.use('/todo', todoRouter)
}
export default routes