import styled from "styled-components";

export const ProductCard=({name,id,img_url,date,developer,publisher,price})=>{

   return (
    <DIV>
    <img src={img_url} alt="" />
    <h2>{name}</h2>
    <p>{date}</p>
    <button>Buy   {price=='free'?`${price}`: `₹${price}`}</button>
    </DIV>
   ) 
}

const DIV=styled.div`
 img{
    width: 100%;
 }

 button{
    color: white;
    background-color: green;
    
 }
`