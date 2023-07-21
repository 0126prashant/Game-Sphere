const allReducer = combineReducers({
    productReducer,
    
    AuthReducer,
})

export const store = legacy_createStore(allReducer,applyMiddleware(thunk))