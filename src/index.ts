import express from 'express'
import http from 'http'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes'
import bodyParser from 'body-parser'

const MONGO_URL = 'mongodb+srv://SrPimenta:bolinho@cluster0.ooqhv.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(cors({
  credentials: true
}))
app.use(bodyParser.json())

app.use('/', router())

const server = http.createServer(app)

server.listen(7000, () => {
  console.log('Listening on http://localhost:7000')
})

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (err: Error) => console.log("Error connecting to Mongo"))
