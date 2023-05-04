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

app.get('/cook/:id', (req, res)=>{
    const id = req.params.id;
    const cookLoad = cookDataLoad.find(cooking=> cooking.id == id) || {};
    res.send(cookLoad)
})


app.listen(port, () => {
    console.log(`cook master server is running ${port}`)
  })