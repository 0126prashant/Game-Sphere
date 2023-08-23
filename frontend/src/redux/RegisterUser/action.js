import axios from "axios";
import { REQUEST_REGISTER, SUCCESS_REGISTER,FAILURE_REGISTER } from "./actionType";

export const registerUser=(user)=>(myDispatch)=>{

    myDispatch({type:REQUEST_REGISTER});

    return axios.post("https://gamefly.onrender.com/user/signUp",user)
    .then((res)=>{
        console.log(res)
        myDispatch({type:SUCCESS_REGISTER,payload:res.data.msg});
    })
    .catch((error)=>{
        myDispatch({type:FAILURE_REGISTER,payload:error})
    })
}
