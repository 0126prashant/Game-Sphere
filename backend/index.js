const express=require("express");
const { connection } = require("./db");
const cors=require("cors");
const { adminRouter } = require("./routes/admin.routes");
require("dotenv").config();

const app=express();

// app.use(cors());   install later
app.use(express.json());

app.use("/admin",adminRouter)

app.listen(8080,async()=>{
    try{
        await connection;
        console.log("Server is running and db is connected")
    }catch(err){
        console.log(err)
    }
})