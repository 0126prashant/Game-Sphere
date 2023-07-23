
import {Route,Routes} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Register";
import ProductPage from "../pages/ProductPags";
import { Homepage } from "../pages/Homepage";
import { CartPage } from "../pages/Cart";


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/user/signUp" element={<SignUp/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes;