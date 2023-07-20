const express=require("express");
const { registerUser, loginUser } = require("../controller/user.controller");

//Routes Object
const userRoute=express.Router();

//Routes
userRoute.post("/register",registerUser);
userRoute.post("/login",loginUser);

//Exporting the module
module.exports=userRoute;