import { useDispatch, useSelector } from "react-redux"
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { PRODUCTS } from "../redux/Products/productTypes";


export const ProductList=()=>{
const data=useSelector((store)=>store.productReducer.products);
let dispatch=useDispatch();
const [page,setPage]=useState(1);
const [dat,setDat]=useState(data);
let [s,setS]=useState(data);
console.log(s);
const [text,setText]=useState('');
let cha=()=>{
  let mod=s.filter((ele)=>{
    return ele.name.toLocaleLowerCase().includes(text.toLocaleLowerCase());
  })  
  dispatch({type:PRODUCTS,payload:mod});

}
useEffect(()=>{
 let limit=page*12;
 let start=limit-12;  
let ran=data.filter((ele,i)=>{
return i>=start&&i<limit;
})
setDat(ran);
},[page,data])
console.log(data);

    return (
        <DIV>
             <div className="search">
<input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Search Products" />
 <button onClick={cha} className="searchB">Search</button>
</div>
        <div className="list">
         {
            dat.map((ele)=>(
                <ProductCard img_url={ele.img_url} name={ele.name} date={ele.date} id={ele.id} price={ele.price}/>
            ))
         }
        </div>
        <div className="pagi">
            <button className="page" disabled={page===1?true:false} onClick={()=>{setPage(page-1)}}>Prev</button>
            <button className="page">{page}</button><button className="page" disabled={page===2?true:false} onClick={()=>{setPage(page+1)}}>Next</button>
        </div>
    </DIV>
    )
}


const DIV=styled.div`
width: 85%;
 .list{
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
    width:100%;
 }
 button{
    background-color:  #f18908;
    color: white;
    padding : 3px;
    width:30%;
 }
 button:hover{
    background-color: gray;
 }
 .pagi{
    display:flex;
    justify-content:space-between;
    margin:auto;
    margin-top:10px;
    margin-bottom: 10px;
    width:20%;
 }
 .search{
    display: flex;
    justify-content: space-between;
    width: 16%;
    margin: auto;
    margin-bottom: 10px;
 }
.searchB{
    background-color: #f18908;
    color: white;
    padding:3px;
}
.searchB:hover{
    background-color: gray;
  
  }
`