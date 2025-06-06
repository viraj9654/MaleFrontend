import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Women’s fashion",
    description:
      "Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.",
    linkText: "Shop now",
    imageUrl: "Imagescategory-1.jpg",
    large: true,
  },
  {
    title: "Men’s fashion",
    description: "358 items",
    linkText: "Shop now",
    imageUrl: "Images/category-2.jpg",
  },
  {
    title: "Kid’s fashion",
    description: "273 items",
    linkText: "Shop now",
    imageUrl: "Images/category-3.jpg",
  },
  {
    title: "Cosmetics",
    description: "159 items",
    linkText: "Shop now",
    imageUrl: "Images/category-4.jpg",
  },
  {
    title: "Accessories",
    description: "792 items",
    linkText: "Shop now",
    imageUrl: "Images/category-5.jpg",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const handleclicked = () => {
    navigate("/productdescription");
  };
  return (
    <section className=" py-12 w-full">
      {/* <img src={categories[0].imageUrl} alt="show kar" /> */}

      <div className="container mx-auto px-4 bg-gray-100">
        <div className="flex flex-wrap -mx-2">
          {/* Large Item */}
          <div className="w-full lg:w-1/2   px-2 mb-4 lg:mb-0 ">
            <div
              className="relative bg-cover bg-center h-full items-center flex"
              style={{ backgroundImage: "url('/Images/category-1.jpg')" }}
            >
              <div className=" inset-0  flex items-center justify-center text-white p-6 h-auto">
                <div className="flex items-center justify-center ">
                  <div className="text-start text-black max-w-lg p-6">
                    <h1 className="text-4xl font-bold mb-4 font-mono">
                      Women’s Fashion
                    </h1>
                    <p className="mb-6 text-gray-800">
                      Sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt labore et dolore magna aliqua. Pendisse
                      ultrices gravida.
                    </p>
                    <a
                      href=""
                      className="text-black font-semibold py-2 px-4 rounded underline underline-offset-8 decoration-red-600 decoration-2"
                      onClick={handleclicked}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Small Items */}
          <div className="w-full lg:w-1/2 px-2">
            <div className="flex flex-wrap -mx-2">
              {/* Men’s fashion */}
              <div className="w-1/2 px-2 mb-4">
                <div
                  className="relative bg-cover bg-center h-64"
                  style={{
                    backgroundImage: "url(Images/category-2.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-start text-white p-4">
                    <div className="text-start text-black">
                      <h4 className="text-xl font-semibold mb-2 text-black">
                        Men’s fashion
                      </h4>
                      <p className="mb-4 text-gray-800">358 items</p>
                      <a
                        href=""
                        className="text-black  font-semibold py-1  rounded underline underline-offset-8 decoration-red-600 decoration-2"
                        onClick={handleclicked}
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Kid’s fashion */}
              <div className="w-1/2 px-2 mb-4">
                <div
                  className="relative bg-cover bg-center h-64"
                  style={{
                    backgroundImage: "url(Images/category-3.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-start text-white p-4">
                    <div className="text-start text-black">
                      <h4 className="text-xl font-semibold mb-2">
                        Kid’s fashion
                      </h4>
                      <p className="mb-4 text-gray-800">273 items</p>
                      <a
                        href=""
                        className="text-black  font-semibold py-1  rounded underline underline-offset-8 decoration-red-600 decoration-2"
                        onClick={handleclicked}
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cosmetics */}
              <div className="w-1/2 px-2 mb-4">
                <div
                  className="relative bg-cover bg-center h-64"
                  style={{
                    backgroundImage: "url(Images/category-4.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-start text-white p-4">
                    <div className="text-start text-black">
                      <h4 className="text-xl font-semibold mb-2">Cosmetics</h4>
                      <p className="mb-4 text-gray-800">159 items</p>
                      <a
                        href=""
                        className=" text-black  font-semibold py-1  rounded underline underline-offset-8 decoration-red-600 decoration-2 "
                        onClick={handleclicked}
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Accessories */}
              <div className="w-1/2 px-2 mb-4">
                <div
                  className="relative bg-cover bg-center h-64"
                  style={{
                    backgroundImage: "url(Images/category-5.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-start text-white p-4">
                    <div className="text-start text-black">
                      <h4 className="text-xl font-semibold mb-2">
                        Accessories
                      </h4>
                      <p className="mb-4 text-gray-800">792 items</p>
                      <a
                        href=""
                        className=" text-black  font-semibold py-1  rounded underline underline-offset-8 decoration-red-600 decoration-2"
                        onClick={handleclicked}
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
