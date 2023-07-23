import axios from "axios";
import { FAILURE_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN } from "./actionType";

export const loginality=(user)=>(dispatch)=>{
    
    dispatch({type:REQUEST_LOGIN});

    axios.post("http://localhost:8080/user/signin",user)
    .then((res)=>{
        dispatch({type:SUCCESS_LOGIN,payload:{msg:res.data.msg,token:res.data.token}})
    })

    .catch((error)=>{
        
        dispatch({type:FAILURE_LOGIN,payload:error})
      })   
}
