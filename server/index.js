require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use('/api/users', require('./route/userRoute'))

app.get('/', (req, res) => {
  res.json({message: 'SERVER IS UP!'})
})

app.listen(port, () => {
  console.log(`SERVER IS UP!`)
})