import {  useNavigate } from "react-router-dom";
import Layout from "../../Layouts/Layouts";
import OrderSuccessImage from"../../assets/Images/orderSuccess.svg"

function OrderSuccess(){
    const navigate=useNavigate();
    return(
        <Layout>
            <div className="flex flex-col justify-center items-center py-28">
                <img 
                  width={400}
                  height={400}
                  src={OrderSuccessImage}
                />
                <p className="text-lg font-semibold">
                    Your order has been successfully placed. We will deliver it shortly. Thank you for choosing Pizza App!
                </p>
                <button 
                  onClick={()=>navigate('/')}
                  className="mt-4 px-8 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                  
                >
                    Go back Home
                </button>

            </div>
        </Layout>
    )
}

export default OrderSuccess;