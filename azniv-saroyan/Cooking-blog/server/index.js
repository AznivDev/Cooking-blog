import express from 'express'
import cors from 'cors'
import bodyParser  from 'body-parser';
import  {authRouter, postsRouter, commentRouter, search} from './routes/index.js'
// import  postsRouter from './routes/posts.js'
// import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
dotenv.config()

//create server
const app = express()
const PORT = process.env.PORT || 6000

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//routes and his functions
app.use('/auth', authRouter)
app.use(postsRouter)
app.use(commentRouter)
app.use(search)

//start server in port PORT
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started in port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

//Starting work aplication
start()