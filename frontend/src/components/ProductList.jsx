import { useSelector } from "react-redux"
import { ProductCard } from "./ProductCard";
import styled from "styled-components";


export const ProductList=()=>{
const data=useSelector((store)=>store.productReducer.products);
console.log(data);

    return (
        <DIV>
        <div className="list">
         {
            data.map((ele)=>(
                <ProductCard {...ele}/>
            ))
         }
        </div>
    </DIV>
    )
}


const DIV=styled.div`
 .list{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
    width:80%;
 }
`