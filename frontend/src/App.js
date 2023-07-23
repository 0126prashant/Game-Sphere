



import { useState } from 'react';
import Navbar from "./components/Navbar";
import { Admin } from './pages/Admin/Admin';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import './App.css';


import AdminNavbar from './pages/Admin/AdminNavbar';
import ProductList from './pages/Admin/Productlist';
import AllRoutes from './components/AllRoutes';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar/>
      <Admin/>
      {/* {isAdminLoggedIn ? <Admin /> : null} */}
      <AllRoutes />
    </div>
  );
}

export default App;
