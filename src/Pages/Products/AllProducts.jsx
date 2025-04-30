import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Layouts/Layouts";
import { getAllProducts } from "../../Redux/Slices/ProductSlices";

function AllProducts(){
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const dispatch=useDispatch();
    const navigate=useNavigate();
  
    const {productsData}=useSelector((state)=>state.product)
    console.log(productsData)
    useEffect(()=>{
      //This will be called when the component mounts
      dispatch(getAllProducts())
    },[])
    return(
        <Layout>
        <div>
      <div className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {isLoggedIn && productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4 md:w-1/3" key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                        <div className="overflow-hidden border rounded-lg border-opacity-60">
                                            <img 
                                                src={item.productImage}
                                                alt="Pizza Image"
                                                className="object-cover object-center w-full lg:h-48 md:h-36"
                                            />
                                            <div className="p-6 border">
                                                <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
                                                    {item.category}
                                                </h2>
                                                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                    {item.productName}
                                                </h1>
                                                <p className="mb-4 text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <p className="text-lg font-medium text-gray-900 title-font">
                                                ₹{item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>  
        </div>
        </Layout>
    )
}
export default AllProducts;