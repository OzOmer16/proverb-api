const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const port = 4444

require('dotenv').config()


const proverbsRoute = require("./routes/proverbs")

mongoose.connect(process.env.DB_CONNECT,

    { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
    },

    () => console.log("Connected to Mongodb database")
)  

   
    


// Middlewares
app.use(express.json())
app.use(cors())




//Proverbs routes
app.use("/proverbs", proverbsRoute)




//Main routes

app.get("/", (req,res) =>{
    res.json({message: " '/' route"})
})

app.get("*", (req,res) => {
    res.json({message: "NOT found"})
})


app.listen(port, ()=>{
    console.log("Connected to server on port ",port)
})