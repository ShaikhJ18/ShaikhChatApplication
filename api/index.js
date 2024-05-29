const express = require("express")
const mongoose = require("mongoose")
const PORT = 4000
const app = express()

app.get('/test',(req,res)=>{
    res.json("test ok")
})



app.listen(PORT, ()=>{
    console.log(`Server Listening on ${PORT}`)
})
