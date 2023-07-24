
import {Route,Routes} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Register";
import ProductPage from "../pages/ProductPags";
import { Homepage } from "../pages/Homepage";
import { CartPage } from "../pages/Cart";
import AdminNavbar from "../pages/Admin/AdminNavbar";
import ProductList from "../pages/Admin/Productlist";
import EditProduct from "../pages/Admin/Producteditpage";
import AddData from "../pages/Admin/AddData";
import Adminlogin from "../pages/Admin/AdminLogin";
import UserList from "../pages/Admin/UserData";
import { Admin } from "../pages/Admin/Admin";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import Confirmation from "../pages/Confirmation";
{/* <AdminNavbar/>
    <ProductList/>
    <EditProduct/> */}

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/user/signUp" element={<SignUp/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        {/* Admin */}
        <Route path="/navadmin" element={<AdminNavbar/>}/>
        <Route path="/adminlistproduct" element={<ProductList/>}/>
        <Route path="/editprd/:productId" element={<EditProduct/>}/>
        <Route path="/addData" element={<AddData/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/userlist" element={<UserList/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/product/checkout" element={<Checkout/>}/>
        <Route path="/product/payment" element={<Payment/>}/>
        <Route path="/product/confirmation" element={<Confirmation/>}/>
        {/* <Route path="/admin" element={<Admin/>}/> */}

    </Routes>
  )
}

export default AllRoutes;