
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Shopcatageory from './pages/Shopcatageory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcatageory category="mens"/>}/>
      <Route path='/women' element={<Shopcatageory category="women"/>}/>
      <Route path='/kids' element={<Shopcatageory category="kids"/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path=':productId'element={<Product/>}/>
      </Route>

       
       <Route path='/cart' element={<Cart/>}/>
       
       <Route path='login' element={<LoginSignup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
