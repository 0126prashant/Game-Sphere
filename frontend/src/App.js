



import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import { Admin } from './pages/Admin/Admin';
import './App.css';


import AdminNavbar from './pages/Admin/AdminNavbar';
import AllRoutes from './components/AllRoutes';
import Adminlogin from './pages/Admin/AdminLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    let toggle = localStorage.getItem("isAdminLoggedIn")=="true"
  return (
    <div className="App">
      {toggle ? <AdminNavbar /> : <Navbar />}
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
