const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const { getBoards, createBoards } = require('./controller')

app.get('/api/data', getBoards)
app.post('/api/data', createBoards)


app.listen(4004, () => console.log('running on 4004'));