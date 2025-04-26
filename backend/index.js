const express = require('express')
const ConnectDB = require('./config/db')
require('dotenv').config()
const cors = require('cors')
const router  = require('./routes')
const cookieParser = require('cookie-parser');

const allowedOrigins = ["https://christgoshencity.vercel.app"];

const corsOptions = {
    origin: function(origin, callback){
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-type', 'Authorization'],
};

const app = express()
app.use('*',cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser())

app.use('/api', router)

const PORT = process.env.PORT || 3700

ConnectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`connected to ${PORT}`)
        console.log('conneced to MongoDb')
    })
})