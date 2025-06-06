import React from 'react'

const UpparFooter = () => {
  const instagramPosts = [
    "Images/Instagram/instagram/insta-1.jpg",
    "Images/Instagram/instagram/insta-2.jpg",
    "Images/Instagram/instagram/insta-3.jpg",
    "Images/Instagram/instagram/insta-4.jpg",
    "Images/Instagram/instagram/insta-5.jpg",
    "Images/Instagram/instagram/insta-6.jpg",
   

    
  ];
  return (
    <>
    <div className="instagram  py-2  w-full">
      <div className="container mx-6 w-full ">
        <div className="flex flex-wrap -m-1 w-full ">
          {instagramPosts.map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ">
              <div
                className="instagram__item bg-cover bg-center w-full  h-80 rounded-md relative"
                style={{ backgroundImage: `url(${image})` }}
              >
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 
    </>
  )
}

export default UpparFooter
