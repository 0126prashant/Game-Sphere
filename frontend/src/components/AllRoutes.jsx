
import {Route,Routes} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Register";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/user/signUp" element={<SignUp/>}/>
        <Route path="/user/login" element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes;