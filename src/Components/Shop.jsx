import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openBranding, setOpenBranding] = useState(true);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);
  const [openSizeFilter, setOpenSizeFilter] = useState(true);
  const [openColorFilter, setOpenColorFilter] = useState(true);
  const [openTags, setOpenTags] = useState(true);

  const toggleAccordion = (section) => {
    switch (section) {
      case "category":
        setOpenCategory(!openCategory);
        break;
      case "branding":
        setOpenBranding(!openBranding);
        break;
      case "price":
        setOpenPriceFilter(!openPriceFilter);
        break;
      case "size":
        setOpenSizeFilter(!openSizeFilter);
        break;
      case "color":
        setOpenColorFilter(!openColorFilter);
        break;
      case "tags":
        setOpenTags(!openTags);
        break;
      default:
        break;
    }
  };
  let navigate = useNavigate();
  const handleclick = () => {
    
    navigate("/productlist")

  }
  return (
    <>
      
      <Navigation/>
      <section class="shop spad max-w-90% p-12">
        <div class="container " >
          <div class="row flex gap-4 ">
            <div className="lg:w-1/4 w-full">
              <div className="shop__sidebar">
                {/* Search Bar */}
                <div className="shop__sidebar__search mb-4">
                  <form action="#" className="flex">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border border-gray-300 rounded-l-md"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-gray-300 rounded-r-md"
                    >
                      <span className="icon_search">🔍</span>
                    </button>
                  </form>
                </div>

                {/* Accordion */}
                <div className="shop__sidebar__accordion">
                  {/* Categories */}
                  <div className="card mb-4">
                    <div className="card-heading">
                      <button
                        onClick={() => toggleAccordion("category")}
                        className="w-full text-left py-2 px-4  text-black font-semibold flex justify-between items-center"
                      >
                        Categories
                        <span
                          className={`transform transition-transform duration-300 ${
                            openCategory ? "rotate-180" : ""
                          }`}
                        >
                          {/* Down Arrow Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Animated Categories Section */}
                    <div
                      className={`card-body overflow-hidden transition-all duration-500 ease-in-out ${
                        openCategory ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      <div className="shop__sidebar__categories">
                        <ul className="space-y-2 px-4">
                          <li>
                            <a href="#" className="text-gray-700">
                              Men (20)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-700">
                              Women (20)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-700">
                              Bags (20)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-700">
                              Clothing (20)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-700">
                              Shoes (20)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-700">
                              Accessories (20)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-700">
                              Kids (20)
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-heading">
                      <button
                        onClick={() => toggleAccordion("branding")}
                        className="w-full text-left py-2 px-4 text-black font-semibold flex justify-between items-center"
                      >
                        Branding
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            openBranding ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {openBranding && (
                      <div className="card-body">
                        <div className="shop__sidebar__brand ">
                          <ul className="space-y-2 px-4">
                            <li>
                              <a href="#" className="text-gray-700">
                                Louis Vuitton
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                Chanel
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                Hermes
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                Gucci
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price Filter */}
                  <div className="card mb-4">
                    <div className="card-heading">
                      <button
                        onClick={() => toggleAccordion("price")}
                        className="w-full text-left py-2 px-4   text-black font-semibold flex justify-between items-center"
                      >
                        Filter Price
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            openPriceFilter ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {openPriceFilter && (
                      <div className="card-body">
                        <div className="shop__sidebar__price">
                          <ul className="space-y-2 px-4">
                            <li>
                              <a href="#" className="text-gray-700">
                                $0.00 - $50.00
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                $50.00 - $100.00
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                $100.00 - $150.00
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                $150.00 - $200.00
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                $200.00 - $250.00
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-700">
                                $250.00+
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Size Filter */}
                  <div className="card mb-4">
                    <div className="card-heading">
                      <button
                        onClick={() => toggleAccordion("size")}
                        className="w-full text-left py-2 px-4   flex justify-between items-center text-black font-semibold"
                      >
                        Size
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            openSizeFilter ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {openSizeFilter && (
                      <div className="card-body">
                        <div className="shop__sidebar__size space-y-2 px-4">
                          {[
                            "xs",
                            "sm",
                            "md",
                            "xl",
                            "2xl",
                            "xxl",
                            "3xl",
                            "4xl",
                          ].map((size) => (
                            <label
                              key={size}
                              className="inline-flex items-center space-x-2"
                            >
                              {/* Hide the default radio button circle and make it look like a button */}
                              <input
                                type="radio"
                                id={size}
                                name="size"
                                className="hidden peer"
                              />
                              {/* Style the label as a button and convert text to uppercase */}
                              <span className=" px-4 py-2 border border-gray-300 rounded-md cursor-pointer transition-colors duration-200 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:bg-gray-200 uppercase text-black font-medium">
                                {size}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Color Filter */}
                  <div className="card mb-4">
                    <div className="card-heading">
                      <button
                        onClick={() => toggleAccordion("color")}
                        className="w-full text-left py-2 px-4   text-black font-semibold flex justify-between items-center"
                      >
                        Colors
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            openColorFilter ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {openColorFilter && (
                      <div className="card-body">
                        <div className="shop__sidebar__color px-4">
                          {/* Using flexbox with wrap to ensure 5 items per row */}
                          <div className="flex flex-wrap space-x-2">
                            {[
                              "#1D3557", // Dark Blue
                              "#D45D00", // Dark Orange
                              "#F4A261", // Yellow-Orange
                              "#E63946", // Dark Red
                              "#2F3A47", // Dark Gray
                              "#6B4226", // Dark Brown
                              // Navy Blue
                            ].map((color, index) => (
                              <label
                                key={index}
                                className="inline-block w-10 h-10 rounded-full cursor-pointer border-4 border-white" // border-4 for thicker border
                                style={{ backgroundColor: color }}
                              >
                                <input
                                  type="radio"
                                  id={`sp-${index + 1}`}
                                  className="hidden"
                                />
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-9 w-full ">
  <div className="shop__product__option">
    <div className="flex justify-between items-center">
      {/* Left Section: Showing 1-12 of 126 Results */}
      <div className="flex-1">
        <p>Showing 1–12 of 126 results</p>
      </div>

      {/* Right Section: Sort by Price in a Single Row */}
      <div className="flex items-center space-x-2">
        <p>Sort by Price:</p>
        <select className="border p-2">
          <option value="">Low To High</option>
          <option value="">$0 - $55</option>
          <option value="">$55 - $100</option>
        </select>
      </div>
    </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12" >
  {/* Product 1 */}
 
                <div className="product__item">
    {/* Product Image and Hover Icons */}
    <div className="product__item__pic relative group">
      <img
        src="Images/Details/product-1.jpg"
        alt="Product"
        className="w-full h-60 object-cover"
      />
      {/* Hover Icon List (Visible on hover) */}
      <ul className="product__hover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <li className="m-2">
                        
                        <span  className="flex items-center justify-center">
                        <div className="bg-white p-2 rounded-full">
            <img
              src="Images/Icons/heart.png"
              alt="Add to favorites"
              className="w-8 h-8 text-white hover:scale-110 transition-transform "
                            />
                            </div>
          </span>
        </li>
       
                      <li className="m-2">
  <a href="#" className="flex items-center justify-center">
    <div className="bg-white p-2 rounded-full">
      <img
        src="Images/Icons/left-and-right-arrows.png"
        alt="Compare"
        className="w-8 h-8 text-white hover:scale-110 transition-transform "
      />
    </div>
  </a>
</li>

        
      </ul>

      {/* Add to Cart Button */}
      <a
        href="#"
        className="add-cart absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white hover:underline mt-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-opacity font-semibold"
      >
        + Add To Cart
      </a>
    </div>

    {/* Product Text (Name, Rating, Price, and Colors) */}
    <div className="product__item__text p-4 cursor-pointer" onClick={handleclick} >
      <h6 className="text-lg font-semibold">Piqué Biker Jacket</h6>

      {/* Rating Stars */}
      <div className="rating flex mt-2">
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
      </div>

      {/* Product Price */}
      <h5 className="text-xl font-semibold mt-2">$67.24</h5>

      {/* Color Options */}
      <div className="product__color__select mt-2 flex space-x-2">
        <label htmlFor="pc-4" className="cursor-pointer">
          <input type="radio" id="pc-4" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-black"></span>
        </label>
        <label htmlFor="pc-5" className="cursor-pointer">
          <input type="radio" id="pc-5" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-900"></span>
        </label>
        <label htmlFor="pc-6" className="cursor-pointer">
          <input type="radio" id="pc-6" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-500"></span>
        </label>
      </div>
    </div>
                </div>
                <div className="product__item">
    {/* Product Image and Hover Icons */}
    <div className="product__item__pic relative group">
      <img
        src="Images/Details/product-1.jpg"
        alt="Product"
        className="w-full h-60 object-cover"
      />
      {/* Hover Icon List (Visible on hover) */}
      <ul className="product__hover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <li className="m-2">
                        
                        <span  className="flex items-center justify-center">
                        <div className="bg-white p-2 rounded-full">
            <img
              src="Images/Icons/heart.png"
              alt="Add to favorites"
              className="w-8 h-8 text-white hover:scale-110 transition-transform "
                            />
                            </div>
          </span>
        </li>
       
                      <li className="m-2">
  <a href="#" className="flex items-center justify-center">
    <div className="bg-white p-2 rounded-full">
      <img
        src="Images/Icons/left-and-right-arrows.png"
        alt="Compare"
        className="w-8 h-8 text-white hover:scale-110 transition-transform "
      />
    </div>
  </a>
</li>

        
      </ul>

      {/* Add to Cart Button */}
      <a
        href="#"
        className="add-cart absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white hover:underline mt-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-opacity font-semibold"
      >
        + Add To Cart
      </a>
    </div>

    {/* Product Text (Name, Rating, Price, and Colors) */}
    <div className="product__item__text p-4 cursor-pointer" onClick={handleclick} >
      <h6 className="text-lg font-semibold">Piqué Biker Jacket</h6>

      {/* Rating Stars */}
      <div className="rating flex mt-2">
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
      </div>

      {/* Product Price */}
      <h5 className="text-xl font-semibold mt-2">$67.24</h5>

      {/* Color Options */}
      <div className="product__color__select mt-2 flex space-x-2">
        <label htmlFor="pc-4" className="cursor-pointer">
          <input type="radio" id="pc-4" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-black"></span>
        </label>
        <label htmlFor="pc-5" className="cursor-pointer">
          <input type="radio" id="pc-5" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-900"></span>
        </label>
        <label htmlFor="pc-6" className="cursor-pointer">
          <input type="radio" id="pc-6" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-500"></span>
        </label>
      </div>
    </div>
  </div>
  <div className="product__item">
    {/* Product Image and Hover Icons */}
    <div className="product__item__pic relative group">
      <img
        src="Images/Details/product-1.jpg"
        alt="Product"
        className="w-full h-60 object-cover"
      />
      {/* Hover Icon List (Visible on hover) */}
      <ul className="product__hover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <li className="m-2">
                        
                        <span  className="flex items-center justify-center">
                        <div className="bg-white p-2 rounded-full">
            <img
              src="Images/Icons/heart.png"
              alt="Add to favorites"
              className="w-8 h-8 text-white hover:scale-110 transition-transform "
                            />
                            </div>
          </span>
        </li>
       
                      <li className="m-2">
  <a href="#" className="flex items-center justify-center">
    <div className="bg-white p-2 rounded-full">
      <img
        src="Images/Icons/left-and-right-arrows.png"
        alt="Compare"
        className="w-8 h-8 text-white hover:scale-110 transition-transform "
      />
    </div>
  </a>
</li>

        
      </ul>

      {/* Add to Cart Button */}
      <a
        href="#"
        className="add-cart absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white hover:underline mt-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-opacity font-semibold"
      >
        + Add To Cart
      </a>
    </div>

    {/* Product Text (Name, Rating, Price, and Colors) */}
    <div className="product__item__text p-4 cursor-pointer" onClick={handleclick} >
      <h6 className="text-lg font-semibold">Piqué Biker Jacket</h6>

      {/* Rating Stars */}
      <div className="rating flex mt-2">
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
      </div>

      {/* Product Price */}
      <h5 className="text-xl font-semibold mt-2">$67.24</h5>

      {/* Color Options */}
      <div className="product__color__select mt-2 flex space-x-2">
        <label htmlFor="pc-4" className="cursor-pointer">
          <input type="radio" id="pc-4" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-black"></span>
        </label>
        <label htmlFor="pc-5" className="cursor-pointer">
          <input type="radio" id="pc-5" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-900"></span>
        </label>
        <label htmlFor="pc-6" className="cursor-pointer">
          <input type="radio" id="pc-6" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-500"></span>
        </label>
      </div>
    </div>
  </div>
  <div className="product__item">
    {/* Product Image and Hover Icons */}
    <div className="product__item__pic relative group">
      <img
        src="Images/Details/product-1.jpg"
        alt="Product"
        className="w-full h-60 object-cover"
      />
      {/* Hover Icon List (Visible on hover) */}
      <ul className="product__hover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <li className="m-2">
                        
                        <span  className="flex items-center justify-center">
                        <div className="bg-white p-2 rounded-full">
            <img
              src="Images/Icons/heart.png"
              alt="Add to favorites"
              className="w-8 h-8 text-white hover:scale-110 transition-transform "
                            />
                            </div>
          </span>
        </li>
       
                      <li className="m-2">
  <a href="#" className="flex items-center justify-center">
    <div className="bg-white p-2 rounded-full">
      <img
        src="Images/Icons/left-and-right-arrows.png"
        alt="Compare"
        className="w-8 h-8 text-white hover:scale-110 transition-transform "
      />
    </div>
  </a>
</li>

        
      </ul>

      {/* Add to Cart Button */}
      <a
        href="#"
        className="add-cart absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white hover:underline mt-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-opacity font-semibold"
      >
        + Add To Cart
      </a>
    </div>

    {/* Product Text (Name, Rating, Price, and Colors) */}
    <div className="product__item__text p-4 cursor-pointer" onClick={handleclick} >
      <h6 className="text-lg font-semibold">Piqué Biker Jacket</h6>

      {/* Rating Stars */}
      <div className="rating flex mt-2">
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
      </div>

      {/* Product Price */}
      <h5 className="text-xl font-semibold mt-2">$67.24</h5>

      {/* Color Options */}
      <div className="product__color__select mt-2 flex space-x-2">
        <label htmlFor="pc-4" className="cursor-pointer">
          <input type="radio" id="pc-4" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-black"></span>
        </label>
        <label htmlFor="pc-5" className="cursor-pointer">
          <input type="radio" id="pc-5" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-900"></span>
        </label>
        <label htmlFor="pc-6" className="cursor-pointer">
          <input type="radio" id="pc-6" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-500"></span>
        </label>
      </div>
    </div>
  </div>
  <div className="product__item">
    {/* Product Image and Hover Icons */}
    <div className="product__item__pic relative group">
      <img
        src="Images/Details/product-1.jpg"
        alt="Product"
        className="w-full h-60 object-cover"
      />
      {/* Hover Icon List (Visible on hover) */}
      <ul className="product__hover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <li className="m-2">
                        
                        <span  className="flex items-center justify-center">
                        <div className="bg-white p-2 rounded-full">
            <img
              src="Images/Icons/heart.png"
              alt="Add to favorites"
              className="w-8 h-8 text-white hover:scale-110 transition-transform "
                            />
                            </div>
          </span>
        </li>
       
                      <li className="m-2">
  <a href="#" className="flex items-center justify-center">
    <div className="bg-white p-2 rounded-full">
      <img
        src="Images/Icons/left-and-right-arrows.png"
        alt="Compare"
        className="w-8 h-8 text-white hover:scale-110 transition-transform "
      />
    </div>
  </a>
</li>

        
      </ul>

      {/* Add to Cart Button */}
      <a
        href="#"
        className="add-cart absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white hover:underline mt-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-opacity font-semibold"
      >
        + Add To Cart
      </a>
    </div>

    {/* Product Text (Name, Rating, Price, and Colors) */}
    <div className="product__item__text p-4 cursor-pointer" onClick={handleclick} >
      <h6 className="text-lg font-semibold">Piqué Biker Jacket</h6>

      {/* Rating Stars */}
      <div className="rating flex mt-2">
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
      </div>

      {/* Product Price */}
      <h5 className="text-xl font-semibold mt-2">$67.24</h5>

      {/* Color Options */}
      <div className="product__color__select mt-2 flex space-x-2">
        <label htmlFor="pc-4" className="cursor-pointer">
          <input type="radio" id="pc-4" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-black"></span>
        </label>
        <label htmlFor="pc-5" className="cursor-pointer">
          <input type="radio" id="pc-5" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-900"></span>
        </label>
        <label htmlFor="pc-6" className="cursor-pointer">
          <input type="radio" id="pc-6" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-500"></span>
        </label>
      </div>
    </div>
  </div>
  <div className="product__item">
    {/* Product Image and Hover Icons */}
    <div className="product__item__pic relative group">
      <img
        src="Images/Details/product-1.jpg"
        alt="Product"
        className="w-full h-60 object-cover"
      />
      {/* Hover Icon List (Visible on hover) */}
      <ul className="product__hover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <li className="m-2">
                        
                        <span  className="flex items-center justify-center">
                        <div className="bg-white p-2 rounded-full">
            <img
              src="Images/Icons/heart.png"
              alt="Add to favorites"
              className="w-8 h-8 text-white hover:scale-110 transition-transform "
                            />
                            </div>
          </span>
        </li>
       
                      <li className="m-2">
  <a href="#" className="flex items-center justify-center">
    <div className="bg-white p-2 rounded-full">
      <img
        src="Images/Icons/left-and-right-arrows.png"
        alt="Compare"
        className="w-8 h-8 text-white hover:scale-110 transition-transform "
      />
    </div>
  </a>
</li>

        
      </ul>

      {/* Add to Cart Button */}
      <a
        href="#"
        className="add-cart absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white hover:underline mt-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-opacity font-semibold"
      >
        + Add To Cart
      </a>
    </div>

    {/* Product Text (Name, Rating, Price, and Colors) */}
    <div className="product__item__text p-4 cursor-pointer" onClick={handleclick} >
      <h6 className="text-lg font-semibold">Piqué Biker Jacket</h6>

      {/* Rating Stars */}
      <div className="rating flex mt-2">
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
        <i className="fa fa-star text-yellow-400"></i>
      </div>

      {/* Product Price */}
      <h5 className="text-xl font-semibold mt-2">$67.24</h5>

      {/* Color Options */}
      <div className="product__color__select mt-2 flex space-x-2">
        <label htmlFor="pc-4" className="cursor-pointer">
          <input type="radio" id="pc-4" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-black"></span>
        </label>
        <label htmlFor="pc-5" className="cursor-pointer">
          <input type="radio" id="pc-5" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-900"></span>
        </label>
        <label htmlFor="pc-6" className="cursor-pointer">
          <input type="radio" id="pc-6" className="hidden" />
          <span className="w-6 h-6 block rounded-full border border-white bg-gray-500"></span>
        </label>
      </div>
    </div>
  </div>
  
  
  

 

</div>

           
   
            </div>
            

          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Shop;
