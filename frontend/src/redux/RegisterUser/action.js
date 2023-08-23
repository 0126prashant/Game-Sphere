import axios from "axios";
import { REQUEST_REGISTER, SUCCESS_REGISTER,FAILURE_REGISTER } from "./actionType";

export const registerUser=(user)=>async(myDispatch)=>{

    console.log(user)

    myDispatch({type:REQUEST_REGISTER});


    try {

        const response=await fetch("https://gamefly.onrender.com/user/signup",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(user)

        })
        const data=await response.json();
        console.log(data)
        return data;
        myDispatch({type:SUCCESS_REGISTER,payload:data.msg});
        
    } catch (error) {
        myDispatch({type:FAILURE_REGISTER,payload:error})
    }

}
