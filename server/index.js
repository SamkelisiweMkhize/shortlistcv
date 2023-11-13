require('dotenv').config()
const express = require('express')
const cors = require('cors')

const connectDB = require('./connectDB')

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

// call the connection function
connectDB()

app.use('/api/users', require('./route/userRoute'))

app.get('/', (req, res) => {
  res.json({message: 'SERVER IS UP!'})
})

app.listen(port, () => {
  console.log(`SERVER IS UP!`)
})
