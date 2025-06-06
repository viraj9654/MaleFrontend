import React, { useState } from 'react'

const ShoppingCart = () => {
  const name = "Viraj Chaudhary";
  const addressType = "HOME";
  const address = "501 Tower 17 gulmohar garden, Raj Nagar Extension, Raj Nagar Extension";
  const mobile = "9654927367";
  const serviceability = "Pay on Delivery available";
  const zipCode="201002"
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };
  return (
    <>
      
      <section className="checkout py-12 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6  bg-gray-100 border-t-2 border-red-600 mx-8	h-12  ">
          <h6 className="text-sm font-medium mt-2 ">
            <span className="text-yellow-500 text-xl mt-4 mr-2">&#x1F4B3;</span>
            <a href="#" className="text-gray-500 ">
              Have a coupon? Click here to enter your code.
            </a>
          </h6>
        </div>
        <form action="#" className="bg-white p-6 rounded-lg  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Billing Details */}
              <div className="lg:col-span-2">
                <div className='flex flex-row justify-between mb-8'>
                <h5 className="text-xl font-medium ">SELECT DELIVERY ADDRESS</h5>
                  <button className='border-solid border-2 border-gray-500 rounded-lg p-2  text-black font-medium'> ADD DELIVERY ADDRESS</button>
                  </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6 ">
                {/* First Name */}
                <div >
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                {/* Country */}
                <div className="col-span-2">
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                {/* Address */}
                <div className="col-span-2">
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Town/City */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Town/City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                {/* State/Province */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    State/Province <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                {/* Postcode/Zip */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Postcode/Zip <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
               
                {/* Order Notes */}
                <div className="col-span-2 mt-4">
                  <label className="flex items-center text-gray-700 font-medium text-sm">
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="order-notes"
                    />
                    Note about your order, e.g., special note for delivery
                  </label>
                  <textarea
                    placeholder="Note about your order, e.g., special note for delivery"
                    className="w-full p-2 border border-gray-300 rounded-md mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className=" p-6 rounded-lg bg-gray-100 shadow-md h-auto">
              <h5 className="text-xl font-semibold mb-4">Your order</h5>
              <div className="checkout__order__product mb-4">
                <ul>
                  <li className="flex justify-between font-medium">
                    <span>Product</span>
                    <span>Total</span>
                  </li>
                  <li className="flex justify-between py-2 border-b text-sm">01. Chain buck bag <span className='font-semibold'>$ 300.0</span></li>
                  <li className="flex justify-between py-2 border-b text-sm">02. Zip-pockets pebbled tote briefcase <span className='font-semibold'>$ 170.0</span></li>
                  <li className="flex justify-between py-2 border-b text-sm">03. Black jean <span className='font-semibold'>$ 170.0</span></li>
                  <li className="flex justify-between py-2 border-b text-sm">04. Cotton shirt <span className='font-semibold'>$ 110.0</span></li>
                </ul>
              </div>
              <div className="checkout__order__total mb-4">
                <ul>
                  <li className="flex justify-between py-2 font-semibold">Subtotal <span className='font-semibold text-red-600'>$ 750.0</span></li>
                  <li className="flex justify-between py-2 font-semibold">Total <span className='font-semibold text-red-600'>$ 750.0</span></li>
                </ul>
              </div>
              <div className="checkout__order__widget mb-4">
                <label className="flex items-center text-gray-700 font-medium text-sm">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="create-account-order"
                  />
                  Create an account?
                </label>
                <p className="text-gray-600 text-sm mt-2">
                  Create an account by entering the information below. If you are a returning customer,
                  log in at the top of the page.
                </p>
                <label className="flex items-center text-gray-700 font-medium text-sm mt-4">
                 
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="cheque-payment"
                    />
                     Cheque payment
                </label>
                <label className="flex items-center text-gray-700 font-medium text-sm mt-2">
                 
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="paypal-payment"
                    />
                     PayPal
                </label>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 w-full rounded-full hover:bg-red-800"
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>
      </section>
  
      <div
      className={`p-4 w-[500px] bg-white border rounded-lg shadow-md cursor-pointer
        ${isSelected ? 'border-blue-500 ' : 'border-gray-200'}`}
      onClick={handleSelect}
    >
      {/* Custom Radio Button Circle */}
      <div className="flex items-center space-x-2">
        <span
          className={`w-5 h-5 border-2 rounded-full flex items-center justify-center
            ${isSelected ? 'bg-blue-500' : 'bg-white'} 
            ${isSelected ? 'border-blue-500' : 'border-gray-400'}
            cursor-pointer`}
        >
          {isSelected && <span className="w-3 h-3 bg-white rounded-full"></span>}
        </span>
        <div className="addressDetails-base-desktopAddressTitle flex items-center justify-between">
          <div className="addressDetails-base-name font-semibold text-sm">{name}</div>
          
        </div>
      </div>

      {/* Address Details */}
      <div className="addressDetails-base-addressField addressBlocks-base-addressDetail text-gray-700 text-xs mt-2">
        {address}
      </div>
      <div className="text-xs text-gray-500 mt-1">
        <span>Ghaziabad, Uttar Pradesh - </span>
        <span>{zipCode}</span>
      </div>

      {/* Mobile Number */}
      <div className="addressDetails-base-mobile mt-2 text-xs">
        <span className="font-semibold">Mobile: </span>
        <span>{mobile}</span>
      </div>

      {/* Serviceability Info */}
      <div className="addressServiceability-base-container mt-2 text-xs">
        <div className="flex items-center">
          <span className="addressServiceability-base-bullet text-blue-600 mr-2">•</span>
          <span>{serviceability}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="addressBlocks-base-btns flex  gap-2 mt-3">
        <button
          className="addressBlocks-base-remove px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => alert('Remove clicked')}
        >
          Remove
        </button>
        <button
          className="addressBlocks-base-edit px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => alert('Edit clicked')}
        >
          Edit
        </button>
      </div>
    </div>

    </>
  )
}

export default ShoppingCart
