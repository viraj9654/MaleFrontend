import React, { useEffect, useState } from 'react'

const Demo = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch('https://world.openfoodfacts.org/products.json');
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <section className="py-12 justify-between">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap mb-8   ">
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0 ">
              <div className="text-3xl font-semibold font-abc">New product</div>
            </div>

            <div className="  w-full lg:w-2/3  ">
              <ul className="flex space-x-6  justify-end">
                <li className="cursor-pointer font-medium text-blue-500">
                  All
                </li>
                <li className="cursor-pointer">Women’s</li>
                <li className="cursor-pointer">Men’s</li>
                <li className="cursor-pointer">Kid’s</li>
                <li className="cursor-pointer">Accessories</li>
                <li className="cursor-pointer">Cosmetics</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {data?.products.map((product) => (
              <div
                key={product.id}
                className={`w-full md:w-1/2 lg:w-1/4 p-4 ${product.category}`}
              >
                <div className=" border-gray-200 rounded-lg overflow-hidden ">
                  <div className="relative border">
                    <img
                      src={product?.selected_images?.front?.display?.en}
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
                    <h6 className=" flex text-lg  justify-center">
                      <a href="#">{product.title}</a>
                    </h6>
                    <div className="flex items-center justify-center  space-x-1 mt-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className="material-icons">
                          star
                        </span>
                      ))}
                    </div>
                    <div className=" flex text-lg font-semibold mt-2 justify-center">
                      {product.originalPrice && (
                        <span className="line-through text-gray-500 mr-2 ">
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
    </div>
  )
}

export default Demo
