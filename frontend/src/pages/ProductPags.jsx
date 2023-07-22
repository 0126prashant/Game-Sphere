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
 width: 100%;
 margin: auto;
 margin: 0;
 padding: 0;
  .main{
        display: flex;
        width: 100%;
        margin: auto;
    }
`

export default ProductPage