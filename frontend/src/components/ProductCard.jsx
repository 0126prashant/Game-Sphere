import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import {
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
 } from '@chakra-ui/react'

export const ProductCard=({name,id,img_url,date,price})=>{
let [ale,setAle]=useState(false)
;let add =()=>{
   let item={
      name,
      img_url,
      date,
      price,
      quantity:1
   }
   axios.post(`http://localhost:8080/cart/add`,item).then((res)=>{
    console.log(res);
    setAle(true);
    setTimeout(()=>{
    setAle(false);
    },2000)
   }).catch((err)=>{
   console.log(err);
   })
}

   return (
    <DIV>
      {ale===true?<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Added!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    The item is added to cart
  </AlertDescription>
</Alert>:
    <div><img src={img_url} alt="" />
    <h2>{name}</h2>
    <p>{date}</p>
    <button onClick={add}>Buy   {price==='free'||price[0]==='t'?`${'free'}`: `₹${price}`}</button>
    </div>}
    </DIV>
   ) 
}

const DIV=styled.div`

 img{
    width: 100%;
 }
h2{
  text-align :center ;
}
p{
   text-align :center ;
}
 button{
   display: block;
   margin: auto;
   padding:5px;
    color: white;
    background-color:  #f18908;

 }
`