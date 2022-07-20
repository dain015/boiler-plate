const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
const config = require('./config/key')

const { User } = require('./models/User')


// application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져오기
app.use(bodyParser.urlencoded({extended: true}))


// application/json 이렇게 된 데이터를 분석해서 가져오기
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(()=>console.log('MongoDB')).catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello'))
app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을 client에서 가져오면 데이터 베이스에 넣어주기
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})
app.listen(port, () => console.log(`on port ${port}!`))



