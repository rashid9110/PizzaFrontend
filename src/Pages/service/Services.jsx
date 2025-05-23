
import cookingImage from "../../assets/Images/cooking1.png";
import OrderImage from "../../assets/Images/orderFood.png";
import PickupImage from "../../assets/Images/pickup.png";
import EnjoyImage from "../../assets/Images/enjoy.png";
import IconPatchCheck from "../../Components/Icon/patch-check";
import Layout from "../../Layouts/Layouts";
import { useNavigate } from "react-router-dom";

function Services(){
    const Navigate=useNavigate();
    return(
<Layout>
<div>
<section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="container flex flex-col md:flex-row">
          <div className=" flex flex-col items-center justify-center rounded-lg lg:w-1/2">
            <img
              src={cookingImage}
              width={500}
              className="rounded-lg"
              alt="Cooking"
            />
          </div>
          <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div>
                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                  Cooked by the best
                  <br /> chefs in the world
                </h2>
                <p className="text-base leading-relaxed text-[#6B7280]">
                  There are many benefits regarding to the but the main ones
                  are:
                </p>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold ">Perfect taste</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold ">Prepared quickly</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold ">Food hygeine guaranteed</span>
              </div>
            </div>

            <div className="px-5 py-4 mx-auto">
              <div className="flex justify-center py-4">
                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-e-full"></div>
              </div>


              <div className="flex flex-wrap space-y-6 md:space-y-0">

                <div className="flex flex-col items-center text-center p-4 md:w-1/3" onClick={()=>Navigate('/AllProducts')}>
                 <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={OrderImage} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Order Food
                    </h2>
                    <p className="text-base leading-relaxed">
                      As easy as 1, 2, 3, just select your favorite pizza and
                      place your order.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                 <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={PickupImage} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                     Pickup Food
                    </h2>
                    <p className="text-base leading-relaxed">
                      Pickup up your order from the nearest store or get it delivered to your doorstep.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                 <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={EnjoyImage} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Enjoy Food
                    </h2>
                    <p className="text-base leading-relaxed">
                      As soon as your order, enjoy the delicious pizza with your loved ones.
                    </p>
                  </div>
                </div>

              </div>

              
            </div>
          </div>
        </div>
      </section>
</div>
</Layout>
    )
}
export default Services;