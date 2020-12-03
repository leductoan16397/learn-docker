const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const rfs = require('rotating-file-stream')
const dotenv = require('dotenv')
const { connectDatabase } = require('./configs/db.config')
dotenv.config()

connectDatabase()

const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === "production"

const app = express();

const accessLogStream = rfs.createStream("access.log", {
    interval: '1d',
    path: path.join(__dirname, "log")
})

app.use(helmet())
app.use(isProd ? morgan('combined', { stream: accessLogStream }) : morgan('combined'))
app.use(cors())
app.use(express.json())
app.use('/api', require('./src/routes/route'))
// console.log("asdasd",require('./src/routes/route'));



app.get('/', async (req, res) => {
    res.json({ message: "hel lo" });

})

app.get('*', async (req, res) => {
    res.json({ message: "hel lo" });

})


app.listen(PORT)
console.log(`listen on port :${PORT}`);