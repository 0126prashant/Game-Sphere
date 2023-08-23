import axios from "axios";
import { FAILURE_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN,LOGOUT } from "./actionType";

export const loginality=(user)=>async(dispatch)=>{
    
    dispatch({type:REQUEST_LOGIN});


    try {

        const response=await fetch("https://gamefly.onrender.com/user/signin",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(user)

        })
        const data=await response.json();
        console.log(data)
        return data;
        dispatch({type:SUCCESS_LOGIN,payload:{msg:data.msg,token:data.token}})
        
    } catch (error) {
        dispatch({type:FAILURE_LOGIN,payload:error})
    }
      
      
}

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
  };