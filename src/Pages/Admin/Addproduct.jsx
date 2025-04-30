import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layouts";
import Food from "../../assets/Images/food.svg";
import { useEffect, useState } from "react";
import { addProduct, resetAddProductState } from "../../Redux/Slices/addproductSlice";

function AddProduct() {
  const dispatch = useDispatch();
  const { loading, success } = useSelector((state) => state.product);

  const [form, setForm] = useState({
    productName: '',
    description: '',
    price: '',
    quantity: '',
    category: 'veg',
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('productImage', image);

    dispatch(addProduct(formData));
  };

  useEffect(() => {
    if (success) {
      setForm({
        productName: '',
        description: '',
        price: '',
        quantity: '',
        category: 'veg',
      });
      setImage(null);
      dispatch(resetAddProductState());
    }
  }, [success, dispatch]);

  return (
    <div>
      <Layout>
        <section className="py-12">
          <div className="flex items-center justify-around">
            <div className="md:w-2/6">
              <img src={Food} alt="Food" />
            </div>

            <div className="max-w-md md:w-4/6 mx-auto mt-8 bg-white p-4">
              <h2 className="mb-4 text-2xl font-semibold">Add New Product</h2>

              <form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="md-4">
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                    Product Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    required
                    minLength={5}
                    maxLength={20}
                    value={form.productName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-indigo-500"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Description */}
                <div className="md-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    required
                    minLength={5}
                    maxLength={60}
                    value={form.description}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-indigo-500"
                    placeholder="Enter product description"
                  />
                </div>

                {/* Price */}
                <div className="md-4">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Product Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    value={form.price}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-indigo-500"
                    placeholder="Enter price"
                  />
                </div>

                {/* Quantity */}
                <div className="md-4">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Product Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    required
                    value={form.quantity}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-indigo-500"
                    placeholder="Enter quantity"
                  />
                </div>

                {/* Category */}
                <div className="md-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    required
                    value={form.category}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-indigo-500"
                  >
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                    <option value="drinks">Soft drinks</option>
                    <option value="sides">Sides</option>
                  </select>
                </div>

                {/* Image */}
                <div className="md-4">
                  <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
                    Product Image <span className="text-red-600">(.jpg, .png, .jpeg)</span>
                  </label>
                  <input
                    type="file"
                    name="productImage"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageChange}
                    required
                    className="mt-1 w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-indigo-500"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-5 px-4 py-2 text-sm text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  {loading ? 'Adding...' : 'Add Product'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default AddProduct;
