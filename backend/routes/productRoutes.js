const {Router} = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const productModel = require("../model/productModel");

const productRoute=Router();


productRoute.get('/products',async (req,res)=>{
const {type}=req.query;
    try {
        if(type=='games'){
    const product =await productModel.find();
    res.status(200).send({product});
        }else if(type=='movies'){
            const product =await productModel.find();
    res.status(200).send({product});
        }else{
            const product =await productModel.find();
    res.status(200).send({product});
        }
} catch (error) {
    res.status(500).send({msg:'error'})
}

})


module.exports=productRoute;