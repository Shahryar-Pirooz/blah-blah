import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connection.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json({})
})
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
