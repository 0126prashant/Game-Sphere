import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { productReducer } from './Products/productReducer'
import thunk from 'redux-thunk';
import {authReducer} from "./Authentication/authReducer";
import { registerUReducer } from './RegisterUser/registerReducer';

const rootReducer=combineReducers({
    productReducer,
    authReducer,
    registerUReducer,
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;