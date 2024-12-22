const express= require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const UserRoute= require("./routes/userRoute");

require("dotenv").config();

const Port=process.env.PORT || 8000
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB connected!!!")
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

app.use("/users", UserRoute);


app.listen(Port, ()=>{ 
     console.log(`Server run on ${Port}`)
})