require('dotenv').config()
const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { 
    useNewUrlParser: true, useUnifiedTopology: true, 
    })
    const connection = mongoose.connection
    connection.on("error", console.error.bind(console, "connection error:"))
    connection.once('open', () => {
        console.log('Database connected')
    })
}

module.exports = connectDB