import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styled  from "styled-components"
import { product } from "../redux/Products/action"

export const Sidebar=()=>{
    const [val,setVal]=useState('games')
    const dispatch=useDispatch();

    useEffect(()=>{
     dispatch(product(val));
    },[val])

    return (
        <DIV>
            <h2>Product Type</h2>
            <button onClick={()=>{setVal('games')}}>Games</button><br />
            <button onClick={()=>{setVal('movies')}}>Movies</button><br />
            <button>Xbox one</button><br />
            <button>PlayStation 4</button><br />
        </DIV>
    )
}

const DIV=styled.div`
 width: 30%;
`