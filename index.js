const express = require('express')
const app = express()
const port = 5000



app.get('/', (req, res) => {
    res.send('Hello cook master')
  })




app.listen(port, () => {
    console.log(`cook master server is running ${port}`)
  })