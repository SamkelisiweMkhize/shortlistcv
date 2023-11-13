const mongoose  = require('mongoose')

const connectDB = async() => {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/teamSky'
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Database Connected: ${MONGO_URI}`)
    } catch (error) {
        console.log(error)
        console.log(`Can't connect to the database, check the connectDB.js`)
    }
}

module.exports = connectDB