import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className=" text-white py-10 ">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap md:-m-4 justify-center">
          {/* About Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0 font-abc"  >
            <div className="footer__about">
              <div className="footer__logo mb-4">
                <a href="./index.html">
                  <img src="Images/Trendy.png" alt="Logo" className="w-32"/>
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                cilisis.
              </p>
              <div className="footer__payment flex space-x-4">
                <a href="#">
                  <img src="Images/Payment/payment-1.png" alt="Payment Method" className="w-8"/>
                </a>
                <a href="#">
                  <img src="Images/Payment/payment-2.png" alt="Payment Method" className="w-8"/>
                </a>
                <a href="#">
                  <img src="Images/Payment/payment-3.png" alt="Payment Method" className="w-8"/>
                </a>
                <a href="#">
                  <img src="Images/Payment/payment-4.png" alt="Payment Method" className="w-8"/>
                </a>
                <a href="#">
                  <img src="Images/Payment/payment-5.png" alt="Payment Method" className="w-8"/>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 lg:w-1/6 mb-6 md:mb-0 ">
            <div className="footer__widget text-black">
              <h6 className="text-lg font-semibold mb-4">Quick links</h6>
              <ul className="space-y-2 text-black">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Account Section */}
          <div className="w-full md:w-1/3 lg:w-1/6 mb-6 md:mb-0">
            <div className="footer__widget text-black">
              <h6 className="text-lg font-semibold mb-4">Account</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">My Account</a></li>
                <li><a href="#" className="hover:underline">Orders Tracking</a></li>
                <li><a href="#" className="hover:underline">Checkout</a></li>
                <li><a href="#" className="hover:underline">Wishlist</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="footer__newslatter text-black">
              <h6 className="text-lg font-semibold mb-4">NEWSLETTER</h6>
              <form action="#" className="flex flex-col space-y-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 text-black rounded-md border border-gray-600"
                />
                <button
                  type="submit"
                  className="site-btn bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                >
                  Subscribe
                </button>
              </form>
              <div className="footer__social mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-14">
          <div className="footer__copyright__text text-center text-gray-400">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart text-red-500" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer
