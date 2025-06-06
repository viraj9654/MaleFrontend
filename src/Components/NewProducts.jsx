import React, { useState } from "react";

const NewProducts = () => {
  // Declare state to store selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Product data
  const products = [
    {
      id: 1,
      category: "Women’s",
      image: "Images/Products/product-1.jpg",
      label: "New",
      title: "Buttons tweed blazer",
      price: "$ 59.0",
      isOutOfStock: false,
      isOnSale: false,
      originalPrice: null,
    },
    {
      id: 2,
      category: "Men’s",
      image: "Images/Products/product-2.jpg",
      label: null,
      title: "Flowy striped skirt",
      price: "$ 49.0",
      isOutOfStock: false,
      isOnSale: false,
      originalPrice: null,
    },
    {
      id: 3,
      category: "Accessories",
      image: "Images/Products/product-3.jpg",
      label: "out of stock",
      title: "Cotton T-Shirt",
      price: "$ 59.0",
      isOutOfStock: true,
      isOnSale: false,
      originalPrice: null,
    },
    {
      id: 4,
      category: "Cosmetics",
      image: "Images/Products/product-4.jpg",
      label: null,
      title: "Slim striped pocket shirt",
      price: "$ 59.0",
      isOutOfStock: false,
      isOnSale: false,
      originalPrice: null,
    },
    {
      id: 5,
      category: "Kid’s",
      image: "Images/Products/product-5.jpg",
      label: null,
      title: "Fit micro corduroy shirt",
      price: "$ 59.0",
      isOutOfStock: false,
      isOnSale: false,
      originalPrice: null,
    },
    {
      id: 6,
      category: "Women's Men's kid's Accessories Cosmetics",
      image: "Images/Products/product-6.jpg",
      label: "Sale",
      title: "Tropical Kimono",
      price: "$ 49.0",
      isOutOfStock: false,
      isOnSale: true,
      originalPrice: "$ 59.0",
    },
    {
      id: 7,
      category: "Women's Men's kid's Accessories Cosmetics",
      image: "Images/Products/product-7.jpg",
      label: null,
      title: "Contrasting sunglasses",
      price: "$ 59.0",
      isOutOfStock: false,
      isOnSale: false,
      originalPrice: null,
    },
    {
      id: 8,
      category: "Women's Men's kid's Accessories Cosmetics",
      image: "Images/Products/product-8.jpg",
      label: "Sale",
      title: "Water resistant backpack",
      price: "$ 49.0",
      isOutOfStock: false,
      isOnSale: true,
      originalPrice: "$ 59.0",
    },
  ];

  // Function to handle category change
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) =>
          product.category.includes(selectedCategory)
        );

  return (
    <section className="py-12 justify-between">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <div className="text-3xl font-semibold font-abc">New product</div>
          </div>

          <div className="w-full lg:w-2/3">
            <ul className="flex space-x-6 justify-end">
              <li
                className={`cursor-pointer font-medium ${selectedCategory === "All" ? "text-blue-500" : ""}`}
                onClick={() => handleCategoryClick("All")}
              >
                All
              </li>
              <li
                className={`cursor-pointer ${selectedCategory === "Women’s" ? "text-blue-500" : ""}`}
                onClick={() => handleCategoryClick("Women’s")}
              >
                Women’s
              </li>
              <li
                className={`cursor-pointer ${selectedCategory === "Men’s" ? "text-blue-500" : ""}`}
                onClick={() => handleCategoryClick("Men’s")}
              >
                Men’s
              </li>
              <li
                className={`cursor-pointer ${selectedCategory === "Kid’s" ? "text-blue-500" : ""}`}
                onClick={() => handleCategoryClick("Kid’s")}
              >
                Kid’s
              </li>
              <li
                className={`cursor-pointer ${selectedCategory === "Accessories" ? "text-blue-500" : ""}`}
                onClick={() => handleCategoryClick("Accessories")}
              >
                Accessories
              </li>
              <li
                className={`cursor-pointer ${selectedCategory === "Cosmetics" ? "text-blue-500" : ""}`}
                onClick={() => handleCategoryClick("Cosmetics")}
              >
                Cosmetics
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`w-full md:w-1/2 lg:w-1/4 p-4 ${product.category}`}
            >
              <div className="border-gray-200 rounded-lg overflow-hidden">
                <div className="relative border">
                  <img
                    src={product?.image}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                  />
                  {product.label && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded-br-lg">
                      {product.label}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h6 className="flex text-lg justify-center">
                    <a href="#">{product.title}</a>
                  </h6>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="material-icons">
                        star
                      </span>
                    ))}
                  </div>
                  <div className="flex text-lg font-semibold mt-2 justify-center">
                    {product.originalPrice && (
                      <span className="line-through text-gray-500 mr-2">
                        {product.originalPrice}
                      </span>
                    )}
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
