const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const jwt = require('jsonwebtoken')
const UserModel = require('./models/User')
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
const jwtSecret = process.env.jwtSecret
const PORT = 4040

const app = express()

app.get('/test',(req,res)=>{
    res.json("test ok")
})

app.post('/register', async (req,res) =>{
    const {username,password} = req.body
    const createdUser = await User.create({username,password})
    jwt.sign({userId: createdUser._id},jwtSecret, (err,token) =>{
        if (err) throw err
        res.cookie('token',token).status(201).json('ok')
    }

    )
})

app.listen(PORT, ()=>{
    console.log(`Server Listening on ${PORT}`)
})
