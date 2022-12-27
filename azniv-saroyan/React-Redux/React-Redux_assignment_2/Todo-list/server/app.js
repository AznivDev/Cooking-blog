const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const auth = require('./routes/auth.js')
const todos= require('./routes/todos.js')
const download= require('./routes/download.js')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9900
const corsOptions = {
    origin: `http://127.0.0.1:5500`,
    crendentials: true
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', auth)
app.use(todos)
app.use(download)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started in port ${PORT}`)
        })
    } catch (err) {
        console.err(err)
    }
}
start()