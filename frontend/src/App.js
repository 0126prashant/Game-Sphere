
import AllRoutes from './components/AllRoutes';
import { Admin } from './pages/Admin/Admin';




function App() {
  return (
    <div className="App">
    {/* <AdminNavbar/>
    <ProductList/>
    <EditProduct/> */}
      <Admin/>
      <AllRoutes/>
    </div>
  );
}

export default App;
