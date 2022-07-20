const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimdain:123456789a@cluster0.nx8x98l.mongodb.net/?retryWrites=true&w=majority', {
}).then(()=>console.log('MongoDB')).catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello'))
app.listen(port, () => console.log(`on port $(port)!`))



