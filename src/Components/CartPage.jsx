import React from 'react'
import { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = [
    {
      imgSrc: 'Images/Cart/cp-1.jpg',
      title: 'Chain bucket bag',
      price: 150.0,
      quantity: 1,
      total: 300.0,
    },
    {
      imgSrc: 'Images/Cart/cp-2.jpg',
      title: 'Zip-pockets pebbled tote briefcase',
      price: 170.0,
      quantity: 1,
      total: 170.0,
    },
    {
      imgSrc: 'Images/Cart/cp-3.jpg',
      title: 'Black jean',
      price: 85.0,
      quantity: 1,
      total: 170.0,
    },
    {
      imgSrc: 'Images/Cart/cp-4.jpg',
      title: 'Cotton Shirt',
      price: 55.0,
      quantity: 1,
      total: 110.0,
    }
  ]
  let navigate = useNavigate();
  const handleUpdateCart = () => {
    navigate("/home")
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    // Handle coupon application logic here
  };
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
  
  return (
    <>
    
    <Navigation/>
    <section className="shop-cart py-12 ">
      <div className="container mx-auto px-4">
        {/* <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg font-normal">
            <thead>
              <tr className="text-xl font-normal text-left border-b">
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Quantity</th>
                <th className="p-4 font-semibold">Total</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 flex items-center">
                    <img src={item.imgSrc} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                    <div className="ml-4">
                      <h6 className="text-base font-medium">{item.title}</h6>
                      <div className="flex mt-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-red-600 font-semibold">${item.price.toFixed(2)}</td>
                  <td className="p-4">
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
                  </td>
                  <td className="p-4 text-red-600 font-semibold">${item.total.toFixed(2)}</td>
                  <td className="p-4 text-center">
                    <button className="text-red-500">
                      <span className="icon_close text-xl">&#x2715;</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div> */}
          <div className="bg-white shadow-md rounded-lg font-normal">
  {/* Header Row (Visible on screens larger than 'sm') */}
  <div className="hidden sm:grid grid-cols-5 gap-4 p-4 text-xl font-normal text-left">
    <div>Product</div>
    <div>Price</div>
    <div>Quantity</div>
    <div>Total</div>
    <div></div> {/* Empty space for action (e.g., delete button) */}
  </div>

  {/* Product Rows (Repeat for each cart item) */}
  {cartItems.map((item, index) => (
    <div key={index} className="grid grid-cols-1 sm:grid-cols-5 gap-4 p-4 border-b">
      {/* Product Name and Image */}
      <div className="flex sm:col-span-1 sm:items-center">
        <img src={item.imgSrc} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
        <div className="ml-4">
          <h6 className="text-base font-medium">{item.title}</h6>
          <div className="flex mt-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa fa-star"></i>
            ))}
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="sm:col-span-1 text-red-600 font-semibold">
        ${item.price.toFixed(2)}
      </div>

      {/* Quantity */}
      <div className="sm:col-span-1">
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

      {/* Total */}
      <div className="sm:col-span-1 text-red-600 font-semibold">
        ${item.total.toFixed(2)}
      </div>

      {/* Remove Button */}
      <div className="sm:col-span-1 text-center">
        <button className="text-red-500">
          <span className="icon_close text-xl">&#x2715;</span>
        </button>
      </div>
    </div>
  ))}
</div>

          
      
        <div className="flex flex-col lg:flex-row lg:justify-between mt-6">
          <div className="lg:w-1/2">
            <h6 className="text-lg font-semibold mb-2">Discount Codes</h6>
            <form onSubmit={handleApplyCoupon} className="flex">
              <input
                type="text"
                placeholder="Enter your coupon code"
                className="border border-gray-300 rounded-l-full px-4 py-2 w-1/2"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-full hover:bg-red-700"
              >
                Apply
              </button>
              </form>
              <div className="flex justify-between mt-6">
           <button
            onClick={handleUpdateCart}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <span className="mr-2"></span>Continue Shopping
          </button>
        </div>
          </div>
          <div className="lg:w-1/3 lg:ml-auto mt-6 lg:mt-0">
            <h6 className="text-lg font-semibold mb-2">Cart Total</h6>
            <ul className="list-none p-0">
              <li className="flex justify-between py-2 font-semibold border-b">Subtotal <span className='text-red-600'>$ 750.00</span></li>
              <li className="flex justify-between py-2 font-semibold border-b">Total <span className='text-red-600'>$ 750.00</span></li>
            </ul>
            <a href="/shoppingcart" className="bg-red-600 text-white px-4 py-2 rounded-full block text-center mt-4 hover:bg-red-800">Proceed to Checkout</a>
          </div>
        </div>
      </div>
      </section>
      <Footer/>
    </>
  )
}

export default CartPage
