require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3000

// const corsOptions = {
//      origin: process.env.ALLOWED_CLIENTS.split(',')
// }

app.use(cors())
app.options('*', cors()) //Enabling CORS Pre-Flight

app.use(express.static('./public'))
app.use(express.json())

const connectDB = require('./config/db')
connectDB()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/api/files', require('./routes/files'))
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'))


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})