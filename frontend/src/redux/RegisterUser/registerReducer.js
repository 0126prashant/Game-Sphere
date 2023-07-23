import { FAILURE_REGISTER, REQUEST_REGISTER, SUCCESS_REGISTER } from "./actionType"



const initialState={
    loading:false,
    msg:"",
    isError:"",
}

export const registerUReducer=(state=initialState,{type,payload})=>{

    switch (type){

        case REQUEST_REGISTER:{
            return {...state,isLoading:true}
        }
        case SUCCESS_REGISTER:{
            return {...state,isLoading:false,msg:payload}
        }
        case FAILURE_REGISTER:{
            return {...state,isLoading:false,isError:payload}
        }
        default:{
            return state;
        }
    }
}