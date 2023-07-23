


import { useState } from 'react';
import './App.css';

import AllRoutes from './components/AllRoutes';
import Navbar from "./components/Navbar";
import { Admin } from './pages/Admin/Admin';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
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
