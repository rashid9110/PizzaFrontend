import Layout from "../../Layouts/Layouts";

function AddProduct() {
  return (
    <div>
      <Layout>
        <section className="py-12">
          <div className="max-w-md mx-auto mt-8 bg-white p-7">
            <h2 className="mb-4 text-2xl font-semibold">Add New Product</h2>
            <form>
              {/* Product Name */}
              <div className="md-4">
                <label 
                      htmlFor="productName" 
                      className="block text-sm font-medium text-gray-700"
                >
                      Product Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  required
                  minLength={5}
                  maxLength={20}
                  id="productName"
                  className="mt-1 w-full p-2 text-sm  border border-gray-00 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"                  
                  placeholder="Enter Product Name"
                />
              </div>
              {/*  description */}
              <div className="md-4">
                <label 
                      htmlFor="description" 
                      className="block text-sm font-medium text-gray-700"
                >
                      Description
                </label>
                <input
                  type="text"
                  name="description"
                  required
                  minLength={5}
                  maxLength={60}
                  id="description"
                  className="mt-1 w-full p-2 text-sm  border border-gray-00 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"                  
                  placeholder="Enter Product Name"
                />
              </div>
              {/* Price */}
              <div className="md-4">
                <label 
                      htmlFor="price" 
                      className="block text-sm font-medium text-gray-700"
                >
                      Product price
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  id="price"
                  className="mt-1 w-full p-2 text-sm  border border-gray-00 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"                  
                  placeholder="Enter Product Name"
                />
              </div>
              {/* Quantity */}
              <div className="md-4">
                <label 
                      htmlFor="quantity" 
                      className="block text-sm font-medium text-gray-700"
                >
                      Product price
                </label>
                <input
                  type="number"
                  name="quantity"
                  required
                  id="quantity"
                  className="mt-1 w-full p-2 text-sm  border border-gray-00 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"                  
                  placeholder="Enter Product Name"
                />
              </div>
              {/* category */}
                <div className="md-4">
                  <label 
                        htmlFor="category" 
                        className="block text-sm font-medium text-gray-700"
                  >
                        Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    required
                    className="mt-1 w-full p-2 text-sm  border border-gray-00 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                    <option value="drinks">Soft drinks</option>
                    <option value="sides">Sides</option>

                  </select>
                </div>
                {/* image */}
                  <div className="md-4">
                    <label 
                          htmlFor="productImage" 
                          className="block text-sm font-medium text-gray-700"
                    >
                          Product Image <span className="text-red-600">(.jpg, .png, .jpeg)</span>
                    </label>
                    <input
                        type="file"
                        name="productImage"
                        id="productImage"
                        accept="jpg,jpeg,png"
                        required
                        className="mt-1 w-full p-2 text-sm  border border-gray-00 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
              {/* submit */}
              <button type="submit" className="w-full mt-5 px-4 py-2 text-sm text-white bg-yellow-500 border-0 rounded-md hover:bg-yellow-600 
              focus:outline-none transition duration-300 ease-in-out">
                Add Product
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default AddProduct;
