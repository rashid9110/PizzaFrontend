import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/LoginPresentation'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/Addproduct'
import ProductDetails from './Pages/Products/ProductDetail'
import CartDetails from './Pages/Cart/CartDetails'

function App() {

  return (
    <div>  
       <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/denied'element={<Denied />}/>

        <Route path='/auth/signup'element={<Signup/>}/>
        <Route path='/auth/login'element={<Login/>}/>
        <Route path='/admin/addProduct'element={<AddProduct/>}/>
        <Route path='/product/:productId'element={<ProductDetails/>}/>
        <Route path='/cart' element={<CartDetails/>}/>

        <Route path='*'element={<NotFound/>}/>

       </Routes>
       
    </div>
  )
}

export default App
