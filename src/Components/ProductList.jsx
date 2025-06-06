import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import Navigation from "./Navigation";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import UpparFooter from "./UpparFooter";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const products = [
  {
    id: "product-1",
    image: "Images/Details/product-1.jpg",
    alt: "Product Image 1",
  },
  {
    id: "product-2",
    image: "Images/Details/product-2.jpg",
    alt: "Product Image 2",
  },
  {
    id: "product-3",
    image: "Images/Details/product-3.jpg",
    alt: "Product Image 3",
  },
  // Add more products as needed
];

const ProductList = () => {
  const [activeTab, setActiveTab] = useState('tabs-1');
  const handleChange = (value) => {
    setSelected(value);
    console.log("Selected value:", value);
  };
  const handleSizeChange = (value) => {
    setSelectedSize(value);
    console.log(value);
  };
  const [SelectedSize, setSelectedSize] = useState(0);
  const plans = ["bg-red-600", "bg-green-600", "bg-black"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  let [selected, setSelected] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 999)); // Limit to a maximum value of 999
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); // Limit to a minimum value of 0
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 999) {
      setQuantity(value);
    } else {
      setQuantity(0); // Reset to 0 if the input is invalid
    }
  }
  let navigate = useNavigate();
  const handleAddclick = () => {
    navigate("/cartpage")
  }
  return (
    <>
      <Navigation />
      <div className="breadcrumb-option py-5   ">
        <div className="container mx-auto px-14 flex justify-self-end	 ">
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <div className="breadcrumb__links text-gray-700 flex flex-wrap flex-row font-abc items-end text-sm">
                <a
                  href="./index.html"
                  className="flex items-center text-black cursor-pointer"
                >
                  <i className="fa fa-home mr-2"></i> Home
                </a>
                <span className="mx-2 fa fa-angle-right mb-1"></span>
                <a href="#" className="text-black">
                  Women’s
                </a>
                <span className="mx-2 fa fa-angle-right mb-1 "></span>
                <span>ESSENTIAL STRUCTURED BLAZER </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product-details py-8 px-12 flex justify-center items-center ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Product Images Section */}
            <div className="lg:w-1/2 w-full">
              <div className="flex">
                {/* Thumbnail Navigation */}
                <div className="w-1/4 mx-2">
                  {products.map((product) => (
                    <a
                      className="block mb-2 cursor-pointer  hover:opacity-100"
                      key={product.id}
                      href="#product-1"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full hover:opacity-100"
                      />
                    </a>
                  ))}

                  {/* Add more product thumbnails as needed */}
                </div>

                {/* Main Product Image Slider */}
                <div className="w-3/4">
                  <div className="relative">
                    <div className="w-full">
                      <img
                        data-hash="product-1"
                        src={selectedProduct.image}
                        alt={selectedProduct.alt}
                        className="w-full h-full "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2 w-full lg:pl-8">
              <div className=" p-2  rounded-lg ">
                <h3 className="text-3xl font-semibold mb-2 ">
                  ESSENTIAL STRUCTURED BLAZER
                  <span className="block text-gray-600 font-medium text-sm">
                    Brand: SKMEI More Men Watches from SKMEI
                  </span>
                </h3>
                <div className="flex items-center mb-4">
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <span className="ml-2 text-gray-600">(138 reviews)</span>
                </div>
                <div className=" font-semibold mb-4 ">
                  <span className="text-red-700 text-3xl gap-2">$ 75.0</span>

                  <span className="text-gray-500 line-through text-xl ml-3 ">
                    $83.0
                  </span>
                </div>
                <p className="mb-6 text-gray-700 mt-6 text-sm">
                  Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
                  fugit, sed quia consequuntur magni lores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <div className="flex items-center mb-6 flex-row gap-x-10	">
                <div className="flex items-center">
      <span className="text-black mr-4">Quantity:</span>
      <form className="flex items-center">
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            onClick={decrement}
            className="bg-white hover:bg-gray-100 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="number"
            id="quantity-input"
            value={quantity}
            onChange={handleQuantityChange}
            className="bg-white border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 border-solid"
            placeholder="999"
            min="0"
            max="999"
            required
          />
          <button
            type="button"
            onClick={increment}
            className="bg-white hover:bg-gray-100 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
                  <a onClick={handleAddclick}
                    href=""
                    className="bg-red-600 rounded-full text-white px-4 py-2  hover:bg-red-800 flex items-center"
                  >
                    <span className="mr-2">
                      <i className="fa fa-shopping-bag"></i>
                    </span>
                    Add to cart
                  </a>
                </div>
                {/* <div className="flex items-center mb-6">
                  <a href="#" className="text-gray-600 mr-4">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="#" className="text-gray-600">
                    <i className="fa fa-adjust"></i>
                  </a>
                </div> */}
                <div className=" p-4 rounded-lg text-sm ">
                  <ul>
                    <li className="mb-2 flex items-center ">
                      <span className="text-black font-semibold mr-2">
                        Availability:
                      </span>

                      <label className="flex items-center ml-16 ">
                        <input type="checkbox" id="stockin" className="mr-2" />
                        <span>In Stock</span>
                      </label>
                    </li>
                    <li className="mb-2 flex items-center">
                      <span className="font-semibold mr-2">
                        Available color:
                      </span>
                      <div className="flex items-center flex-col ml-9">
                        <RadioGroup
                          value={selected}
                          onChange={handleChange}
                          aria-label="Server size"
                          className="flex gap-2"
                        >
                          {plans.map((plan) => (
                            <Field
                              key={plan}
                              className={`flex items-center gap-2 ${plan} rounded-full `}
                            >
                              <Radio
                                value={plan}
                                className={`group flex size-5 items-center justify-center rounded-full  ${plan} data-[checked]:opacity-100`}
                              >
                                <svg
                                  className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Radio>
                              {/* <Label>{plan}</Label> */}
                            </Field>
                          ))}
                        </RadioGroup>
                      </div>
                    </li>
                    <li className="mb-2 flex items-center">
                      <span className="font-semibold mr-2">
                        Available size:
                      </span>
                      <div className="flex items-center ml-10">
                        <RadioGroup
                          value={SelectedSize}
                          onChange={handleSizeChange}
                          aria-label="Server size"
                        >
                          <div className="flex items-center gap-2">
                            {" "}
                            {/* Adjust gap as needed */}
                            {sizes.map((size) => (
                              <Field
                                key={size}
                                className={`flex items-center gap-1  rounded-full `}
                              >
                                <Radio
                                  value={size}
                                  checked={size === SelectedSize}
                                ></Radio>
                                <Label
                                  className={`${
                                    size === SelectedSize
                                      ? "text-red-400 pointer-events-none"
                                      : "hover:text-red-300 "
                                  }`}
                                >
                                  {size}
                                </Label>
                              </Field>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </li>
                    <li className="mb-2 flex items-center ">
                      <span className="font-semibold mr-2 ">Promotions:</span>
                      <p className="ml-14">Free shipping</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12">
            <div className="rounded-lg">
              
          
             
              <ul className="flex border-b">
                <li className="w-1/3">
                  <a
                      onClick={() => setActiveTab('tabs-1')}
                    className={`block py-4 text-center cursor-pointer border-b-2 ${
                      activeTab === 'tabs-1' ? 'border-gray-300 text-gray-900' : 'border-transparent text-gray-600'
                    }`}
                    href="#tabs-1"
                  >
                    Description
                  </a>
                </li>
                <li className="w-1/3">
                  <a
                      onClick={() => setActiveTab('tabs-2')}
                      className={`block py-4 text-center cursor-pointer border-b-2 ${
                        activeTab === 'tabs-1' ? 'border-gray-300 text-gray-900' : 'border-transparent text-gray-600'
                      }`}
                    href="#tabs-2"
                  >
                    Specification
                  </a>
                </li>
                <li className="w-1/3">
                  <a
                    onClick={() => setActiveTab('tabs-3')}
                    className={`block py-4 text-center cursor-pointer border-b-2 ${
                      activeTab === 'tabs-1' ? 'border-gray-300 text-gray-900' : 'border-transparent text-gray-600'
                    }`}
                  href="#tabs-3"
                  >
                    Reviews (2)
                  </a>
                </li>
              </ul>
              <div className="p-6">
                <div id="tabs-1 " className={activeTab === 'tabs-1' ? 'block' : 'hidden'}>
                  <h6 className="text-xl font-bold mb-4">Description</h6>
                  <p className="text-gray-700 mb-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut loret fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt loret. Neque porro
                    lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut loret fugit, sed quia ipsu consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nulla consequat
                    massa quis enim.
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                  </p>
                </div>
                <div id="tabs-2" className={activeTab === 'tabs-2' ? 'block' : 'hidden'}>
                  <h6 className="text-xl font-bold mb-4">Specification</h6>
                  <p className="text-gray-700 mb-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut loret fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt loret. Neque porro
                    lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut loret fugit, sed quia ipsu consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nulla consequat
                    massa quis enim.
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                  </p>
                </div>
                <div id="tabs-3"  className={activeTab === 'tabs-3' ? 'block' : 'hidden'}>
                  <h6 className="text-xl font-bold mb-4">Reviews (2)</h6>
                  <p className="text-gray-700 mb-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut loret fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt loret. Neque porro
                    lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut loret fugit, sed quia ipsu consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nulla consequat
                    massa quis enim.
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>
      

      <UpparFooter />
      <Footer/>
    </>
    
  );
};

export default ProductList;
