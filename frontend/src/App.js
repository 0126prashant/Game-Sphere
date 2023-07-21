
import AdminNavbar from './pages/Admin/AdminNavbar';
import ProductList from './pages/Admin/Productlist';
import AllRoutes from './components/AllRoutes';




function App() {
  return (
    <div className="App">
    <AdminNavbar/>
    <ProductList/>
      <AllRoutes/>
    </div>
  );
}

export default App;
