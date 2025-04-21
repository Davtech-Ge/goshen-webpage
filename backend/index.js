const express = require('express')
const ConnectDB = require('./config/db')
require('dotenv').config()
const cors = require('cors')
const router  = require('./routes')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({
    origin : "https://christgoshencity.vercel.app",
    credentials : true
}))
app.use(express.json())

app.use(cookieParser())

app.use('/api', router)

const PORT = process.env.PORT || 3700

ConnectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`connected to ${PORT}`)
        console.log('conneced to MongoDb')
    })
})