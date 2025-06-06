import React from "react";

const DiscountSection = () => {
  return (
    <>
      <section className=" py-12 w-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 p-0 ">
              <div className="relative h-full">
                <img
                  src="Images\discount.jpg"
                  alt="Discount"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 p-0 flex flex-col justify-center h-110">
              <div className="p-6 flex flex-col items-center justify-center bg-gray-100  ">
                <div className="rounded-full bg-white flex flex-col items-center justify-center w-60 h-60 text-center">
                  <h6 className="text-lg font-medium text-gray-700">
                    Discount
                  </h6>
                  <h2 className="text-4xl font-bold mb-2 text-red-600 font-mono">
                    Summer 2024
                  </h2>
                  <h5 className="text-2xl font-semibold">
                    <span className="text-red-600">Sale</span> 50%
                  </h5>
                </div>

                <div className="flex space-x-4 mb-6 text-center">
                  <div className="flex flex-col items-center p-4 rounded-lg">
                    <span className="text-2xl font-bold">22</span>
                    <p className="text-sm">Days</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg">
                    <span className="text-2xl font-bold">18</span>
                    <p className="text-sm">Hour</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg">
                    <span className="text-2xl font-bold">46</span>
                    <p className="text-sm">Min</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg">
                    <span className="text-2xl font-bold">05</span>
                    <p className="text-sm">Sec</p>
                  </div>
                </div>

                <a
                  href="#"
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition text-center w-40"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountSection;
