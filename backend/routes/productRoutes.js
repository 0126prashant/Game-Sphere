const {Router} = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const productModel = require("../model/productModel");

const productRoute=Router();


productRoute.get('/products',async (req,res)=>{

    try {
    const product =await productModel.find();
    res.status(200).send({product}); 
} catch (error) {
    res.status(500).send({msg:'error'})
}

})


module.exports=productRoute;