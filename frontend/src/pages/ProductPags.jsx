import React from "react";
import { Sidebar } from "../components/ProdSidebar";
import styled from "styled-components";
import { ProductList } from "../components/ProductList";


const ProductPage=()=>{

    return(
 <DIV>
  <div className="main">
   <Sidebar/> 
    <ProductList/>
</div>
</DIV>
    )
}

const DIV=styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 width: 100%;

  .main{
        display: flex;
        width: 90%;
        margin: auto;
    }
`

export default ProductPage