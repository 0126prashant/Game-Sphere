

import './App.css';
import AllRoutes from "./components/AllRoutes"

import AdminNavbar from './pages/Admin/AdminNavbar';
import ProductList from './pages/Admin/Productlist';
import AllRoutes from './components/AllRoutes';
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
     <AllRoutes/>

     
    </div>
  );
}

export default App;
