const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
// const path = require('path')

const app = express()
app.use(bodyParser.json())


// app.get('/api', (req,res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
// })

// Verify Token
const verifyToken = (req, res, next) => {
    // Get authorization header value
    // Header Format: Authorization: Bearer <token>
      const bearerHeader = req.headers['authorization']
      console.log(bearerHeader)
        if(bearerHeader !== undefined){
            const tokenArray = bearerHeader.split(" ")
            const bToken = tokenArray[1]
            req.token = bToken
        }
        else {res.sendStatus(403)}
        next()
    }
    

    
app.post('/api/posts', verifyToken, (req,res) => {
    jwt.verify(req.token, 'this is a secret', (err, authData) => {
        if(err){
          res.sendStatus(403)
        }
        else {
            // res.json({message: "Post created",
            // authData
            res.send({message: "Post created",
        authData})
     
        }
    })
      
})


app.post('/api/login',(req,res) => {
    const user = {
        email: "email@example.com",
        password: "password123"
    }

 jwt.sign({ user: user }, 'this is a secret', (err, token) => {
        res.send({token}) 
    })

})



app.listen(5000, () => {
    console.log('server running on 5000')
})