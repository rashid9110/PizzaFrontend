import { useDispatch, useSelector } from "react-redux";
import Pizzalogo from "../assets/Images/pizza1.png";
import Footer from "../Components/Icon/Footer";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from '../assets/Images/cart.svg'
import { logout } from "../Redux/Slices/AuthSlice";
function Layout({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log('isLoggedIn', isLoggedIn);
  const {cartsData} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const Navigate=useNavigate();
  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }
  return (
    <div>
      <nav className="flex items-center justify-around h-18 text-[#6B7280] font-mono border-none shadow-md">
        <div className="flex items-center justify-center"
          onClick={() =>Navigate('/')}
        >
          <p className="hover:text-[#FF9110]">Pizza App</p>
          <img src={Pizzalogo} alt="Pizza logo"/>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Menu </p>
            </li>
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>Services </p>
            </li>
            <li className="hover:text-[#FF9110]">
              {" "}
              <p>About </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
          <li className='hover:text-[#FF9110]'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>Logout</Link>
                            ) : (
                                <Link to={'/auth/login'}>Login</Link>
                            )}
                        </li>
                        {isLoggedIn && (
                            <Link to={'/cart'}>
                                <li>
                                    <img src={CartIcon} className='w-8 h-8 inline' />
                                    {' '}
                                    <p className='text-black inline'>{cartsData?.items?.length}</p>
                                </li>
                            </Link>
                            
                        )}
          </ul>
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
