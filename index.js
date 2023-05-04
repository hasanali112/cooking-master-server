const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const cookDataLoad = require('./data/cookdata.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello cook master')
  })

app.get('/cook', (req, res)=>{
    res.send(cookDataLoad)
})


app.listen(port, () => {
    console.log(`cook master server is running ${port}`)
  })