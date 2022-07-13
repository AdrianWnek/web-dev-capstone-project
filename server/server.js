const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const { getBoards, createBoards, deletebtn } = require('./controller')

app.get('/api/data', getBoards)
app.post('/api/adddata', createBoards)
app.delete('/api/delete/:id', deletebtn)


app.listen(4004, () => console.log('running on 4004'));
