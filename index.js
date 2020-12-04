import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import rfs from 'rotating-file-stream'
import dotenv from 'dotenv'
import connectDatabase from './configs/db.config.js'
import routes from './src/routes/route.js';
dotenv.config()

connectDatabase()

const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === "production"

const app = express();

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));

const accessLogStream = rfs.createStream("access.log", {
    interval: '1d',
    path: path.join(__dirname, "log")
})

app.use(helmet())
app.use(isProd ? morgan('combined', { stream: accessLogStream }) : morgan('combined'))
app.use(cors())
app.use(express.json())
app.use('/api', routes(app))



app.get('/', async (req, res) => {
    res.json({ message: "hel lo" });

})

app.get('*', async (req, res) => {
    res.json({ message: "hel lo" });

})


app.listen(PORT)
console.log(`listen on port :${PORT}`);