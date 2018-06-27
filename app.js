const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
// const path = require('path')

const app = express()
app.use(bodyParser.json())

const user = {
    email: "email@example.com",
    password: "password123"
}

// app.get('/api', (req,res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
// })

app.post('/api', (req,res) => {
    if(user.email == req.body.email && user.password == req.body.password){
        let token = jwt.sign({ name: 'Luke' }, 'this is a secret')
        res.send(token) 
    }
    else {console.log('you are not authorised')}
})

app.listen(5000, () => {
    console.log('server running on 5000')
})