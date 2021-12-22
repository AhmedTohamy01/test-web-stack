const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())

mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', () => console.log('Connected to database !'))

app.listen(port, () => {
  console.log(`Server connected on port ${port} !`)
})

// root query
app.get('/', (req, res) => {
  res.send('Welcome to GraphQL Express Server !')
})