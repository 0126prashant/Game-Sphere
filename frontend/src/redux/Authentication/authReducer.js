import { FAILURE_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN } from "./actionType"


const initialState={
    isLoading: false,
    isError: "",
    isAuth: false,
    token: "",
    msg:"",
  }

   export const authReducer = (state=initialState,{type,payload}) => {

    switch(type){
      case REQUEST_LOGIN:{
        return {...state,isLoading:true}
      }
      case SUCCESS_LOGIN:{
        return {...state,isLoading:false, isAuth:payload.success, token:payload.token,msg:payload.msg}
      }
      case FAILURE_LOGIN:{
        return {...state,isLoading:false, isError:payload}
      }
        default:{
            return state;
        }
    }
    
    }
  