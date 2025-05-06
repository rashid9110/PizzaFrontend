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
import Order from './Pages/Order/Order'
import OrderSuccess from './Pages/Order/OrderSuccess'
import RequireAuth from './Components/Auth/RequireAuth'
import Services from './Pages/service/Services'
import AllProducts from './Pages/Products/AllProducts'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const waitForTidio = () => {
      if (window.tidioChatApi) {
        window.tidioChatApi.on("ready", () => {
          if (isLoggedIn) {
            window.tidioChatApi.show();
            console.log("Tidio chat shown");
          } else {
            window.tidioChatApi.hide();
            console.log("Tidio chat hidden");
          }
        });
      } else {
        setTimeout(waitForTidio, 500); // Wait until tidioChatApi loads
      }
    };
  
    waitForTidio();
  }, [isLoggedIn]);
  
  
  return (
  
    <div>  
       <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/denied'element={<Denied />}/>

        <Route path='/auth/signup'element={<Signup/>}/>
        <Route path='/auth/login'element={<Login/>}/>

        <Route element={<RequireAuth/>}>
        <Route path='order' element={<Order/>}/>
        <Route path='order/success' element={<OrderSuccess/>}/>
        <Route path='/cart' element={<CartDetails/>}/>

        </Route>


        <Route path='/admin/addProduct'element={<AddProduct/>}/>
        <Route path='/product/:productId'element={<ProductDetails/>}/>

        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path='/Services' element={<Services/>}/>


        <Route path='*'element={<NotFound/>}/>

       </Routes>
       
    </div>
  )
}

export default App
