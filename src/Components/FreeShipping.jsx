import React from 'react'
import { FaCar, FaMoneyBillAlt, FaHeadphones, FaHeadset } from 'react-icons/fa';

const FreeShipping = () => {
  return (
    <>
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 ">
          {/* Free Shipping */}
          <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-4 mb-6 " >
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
              <FaCar className="text-4xl text-red-600 mb-4 flex item-center" />
              <h6 className="text-xl font-semibold mb-2">Free Shipping</h6>
              <p className="text-gray-600">For all orders over $99</p>
            </div>
          </div>
          
          {/* Money Back Guarantee */}
          <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex items-center justify-center flex-col ">
              <FaMoneyBillAlt className="text-4xl text-red-600 mb-4 relative " />
              <h6 className="text-xl font-semibold mb-2">Money Back Guarantee</h6>
              <p className="text-gray-600">If goods have problems</p>
            </div>
          </div>
          
          {/* Online Support 24/7 */}
          <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
              <FaHeadset className="text-4xl text-red-600 mb-4" />
              <h6 className="text-xl font-semibold mb-2">Online Support 24/7</h6>
              <p className="text-gray-600">Dedicated support</p>
            </div>
          </div>
          
          {/* Payment Secure */}
          <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-4 mb-6 ">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
              <FaHeadphones className="text-4xl text-red-600 mb-4" />
              <h6 className="text-xl font-semibold mb-2">Payment Secure</h6>
              <p className="text-gray-600">100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default FreeShipping
