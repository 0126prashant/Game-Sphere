
const initialState={
   products:[],
   isLoading:false,
   isError:false
}

export const productReducer=(state=initialState,action)=>{
switch(action.type){
    case "REQUEST":{
     return{
        ...state,isLoading:true
     }
    }
    case "PRODUCTS":{
     return{
        ...state,
        isLoading:false,
        products:action.payload
     }
    }
    case "FAILED":{
     return {
        ...state,
        isLoading:false,
        isError:true
     }
    }
}
}


