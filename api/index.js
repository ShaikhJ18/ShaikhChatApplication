const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL);
const PORT = 4040

const app = express()

app.get('/test',(req,res)=>{
    res.json("test ok")
})

app.post('/register', (req,res) =>{
    
})

app.listen(PORT, ()=>{
    console.log(`Server Listening on ${PORT}`)
})
