// Write your code here
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminUserModel } = require("../model/admin.model");
const adminRouter = express.Router()

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