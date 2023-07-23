import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled  from "styled-components"
import { product } from "../redux/Products/action"
import { PRODUCTS } from "../redux/Products/productTypes"

export const Sidebar=()=>{
    const [val,setVal]=useState('games')
    const data=useSelector((store)=>store.productReducer.products);
    const dispatch=useDispatch();

    useEffect(()=>{
     dispatch(product(val));
    },[val])

const filter=()=>{
let dat=data.filter((ele)=>{return ele.price==='free'});
console.log(data);
dispatch({type:PRODUCTS,payload:dat});
}

    return (
        <DIV>
            <h2>Product Type</h2>
            <button onClick={()=>{setVal('games')}}>Games</button><br />
            <button onClick={()=>{setVal('movies')}}>Movies</button><br />
            <button>Xbox one</button><br />
            <button>PlayStation 4</button><br />
            <br />
            <h2>Show Only</h2>
            <button onClick={filter}>Free Products</button><br />
        </DIV>
    )
}

const DIV=styled.div`
 width: 15%;
 input{
    padding: 3px;
 }
 h2{
    margin-top: 35px;
    text-align: center;
    font-size: large;
 }
 button{
    background-color: white;
    width: 100%;
    margin: 5px;
    padding: 5px;
 }
`