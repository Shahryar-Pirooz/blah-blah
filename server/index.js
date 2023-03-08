import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

//db
import connectDB from './db/connection.db.js'

//
import authRouter from './routes/auth.route.js'

//middleware
import notFoundMiddleware from './middleware/not-found.middleware.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).json({})
})
app.use('/api/v1/auth', authRouter)
app.use('*', notFoundMiddleware)
const start = async () => {
    try {
        await connectDB(process.env.DB_URL)
        app.listen(port, () => {
            console.log(`server is listening on ${port} `)
        })
    } catch (error) {
        console.log(error)
    }
}
start()
