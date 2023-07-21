// Write your code here
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminUserModel } = require("../model/admin.model");
const adminRouter = express.Router()


// ---------Get the data while admin login----------------------->>>>

adminRouter.get("/",async(req,res)=>{
  try {
    // const data = await 
    
  } catch (error) {
    res.status(400).json({ error: err.messag });
  }
})

// --------------------If admin wants to update the data----------->>>>
adminRouter.post("/updatedata:id",async(req,res)=>{
  try {
    // const data = await 
    
  } catch (error) {
    res.status(400).json({ error: err.messag });
  }
})



adminRouter.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  const PasswordChecking =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!PasswordChecking.test(password)) {
    return res.status(400).json({ msg: "Invalid password format! Password format Should contain atleast one uppercase character,one number ,special character and length greater then 8",});
  }

  try {
    const existingUserEmail = await AdminUserModel.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({ msg: "Admin Already Exists" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).json({ error: err.messag });
      } else {
        const adminuser = new AdminUserModel({
          name,
          email,
          phone,
          password: hash,
        });
        await adminuser.save();
      }
    });
    res
      .status(200)
      .json({
        msg: "The new Admin has been registered",
        registeredAdmin: req.body,
      });
  } catch (err) {
    res.status(400).json({ error: err.messag });
  }
});

adminRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await AdminUserModel.findOne({ email });
      if (admin) {
        bcrypt.compare(password, admin.password,(err, result)=>{
          if (result){
            var token = jwt.sign({ _id:admin._id},",masai",{
              expiresIn: 120,
            });
            var refreshToken = jwt.sign({ _id: admin._id }, "admin", {
              expiresIn: 300,
            });
            res
              .status(200)
              .json({
                msg: "Login successful!",
                token: token,
                refreshToken: refreshToken,
              });
          }
        });
      } else{
        res.status(200).json({ msg:"Admin Not Found"});
      }
    } catch (err) {
      return res.status(400).json({error: err.messag});
    }
  });

  module.exports = {
    adminRouter
  }