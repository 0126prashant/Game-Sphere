import { useEffect, useState } from "react"
import axios from "axios";
import styled from "@emotion/styled";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export const CartPage=()=>{
const [cart,setCart]=useState([]);
const [Total,setTotal]=useState(0);

function getProduct(){
    axios.get(`https://gamefly.onrender.com/cart`).then((res)=>{
        console.log(res);
setCart(res.data.product);
}).catch((err)=>{
console.log(err)
});
}
useEffect(()=>{
getProduct();
},[])

useEffect(()=>{
let num=0;

cart.map((ele)=>{
   if(ele.price==='free'||ele.price[0]==='t'){
   num+=0; 
   }else{num+=Number(ele.price)*Number(ele.quantity)}
})
setTotal(num);

},[cart])

function delB(_id){
    console.log(_id)
axios.delete(`https://gamefly.onrender.com/cart/remove/${_id}`).then((res)=>{
   console.log(res); 
}).catch((err)=>{
   console.log(err); 
});
getProduct();
}

function decButton(id){
    let newCart=[];

    cart.map((ele)=>{
     if(ele.id===id){
      ele.quantity--;
     }
      newCart.push(ele);
    })
    setCart(newCart);
   
}
    

function incButton(id){
  let newCart=[];

  cart.map((ele)=>{
   if(ele.id===id){
    ele.quantity++;
   }
    newCart.push(ele);
  })
  setCart(newCart);
}

    return (
        <DIV>
<div className="struc">
<div className="cards">
    {cart.map((ele)=>(
    <CDIV>
    <img src={ele.img_url} alt="" /><br />
    <h2>{ele.name}</h2><br />
    <h2 className="price">₹{ele.price}</h2><br />
    <button onClick={()=>{delB(ele._id)}} className="del">Delete</button><br />
  <div className="quant">  <button onClick={()=>{incButton(ele.id)}}>+</button>
   <button disabled>{ele.quantity}</button> <button onClick={()=>{decButton(ele.id)}}>-</button></div>

</CDIV>
    ))}
</div>

<div className="total">
    

    <div className="box">
    <h1>Cart Total</h1>
        <div><h2>Cart Value:{Total}</h2></div> 
          <div><h2>Discount: 0%</h2></div> 
         <div> <h2>Dilivery Charge: Free</h2></div>       
        <div><h2>Total Amout:{Total}</h2></div> 
        <div><Link to={"/product/checkout"}><button className="checkout">Place your order</button></Link></div>
    </div>
</div>
</div>
        </DIV>
    )
}


const DIV=styled.div`
width: 100%;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
.struc{
    margin: 90px 0px 0px 0px;
    display: flex;
    width: 100%;
    justify-content: space-around;
}

  .cards{
width: 40%;
  }  
  .total{
    width: 40%;
  }
  .box{
    width: 60%;
    margin: auto;

  }
  .box>div{
    border:#00472F 2px solid;
    margin:5px 5px 5px 5px;
  }
  .box > h1{
    font-size: larger;
    text-align: center;
    font-weight: bolder;
    color:  #f18908;
  }
  .checkout{
    background-color: #f18908;
    color: white;
    width: 100%;
  }
  .checkout:hover{
    background-color: gray;
  
  }
`



const CDIV=styled.div`
margin: 10px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
img{
height : 150px;
margin: auto;
}
.price{
    color:#00472F;
  
}
.del{
   background-color :red ;
   display: block;
   margin: auto;
   width: 15%;
   border-radius: 5px;
}
.del:hover{
    background-color: grey;
}
h2{
    text-align:center;
}
div{
    display: flex;
   margin :auto ;
   width: 40%;
   justify-content: space-around;
}
div>button{
background-color: #f18908;
color: white;
width: 25%;
}
div > button:hover{
background-color: black;
color: white;

display: block;
}
`