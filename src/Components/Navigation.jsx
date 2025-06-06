
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

const navigation = [
  
  { name: 'HOME', href: '#', current: false },
  { name: 'WOMENS', href: '#', current: false },
  { name: 'MEN', href: '#', current: false },
  { name: 'KIDS', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




const Navigation = () => {
  let navigate = useNavigate();
  const handleCart = () => {
    navigate("/cartpage") 
  }
  const handleHome = () => {
    navigate("/home") 
  }
  const handleLogin = () => {
    navigate("/login") 
   }
  return (
    <>
    
    <Disclosure as="nav" className="  shadow-lg	 ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  	">
    <div className="relative flex h-20 items-center justify-between">
      {/* Mobile menu button */}
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
          <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
        </DisclosureButton>
      </div>

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center" onClick={handleHome}>
          <img alt="Your Company" src="Images/Trendy.png" className="h-12 w-auto" />
        </div>

    
       

        {/* Desktop Navigation Links */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg- hover:text-black',
                  'rounded-md px-2 py-2 text-base font-abc transition duration-150 border-b-8 border-transparent hover:border-red-800 font-medium ',
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
              </div>
                  {/* Desktop Search Bar */}
              <div className="hidden sm:flex sm:items-center sm:ml-6">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Sign In/Log In Buttons */}
        <div className="hidden sm:flex sm:items-center sm:ml-6 ">
          <a
            href="/login"
                  className="text-black  rounded-md  py-2 text-sm font-abc font-semibold"
                  onClick={handleLogin}
          >
            Sign In /
          </a>
          <a
            href="/register"
            className=" text-black  rounded-md px- py-2 text-sm font-abc font-semibold	 "
          >
            Register
          </a>
        </div>
      </div>

      {/* Desktop Notification and Profile */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          type="button"
          className="relative rounded-full bg-transparent p-1 text-black hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={handleCart}>
          <span className="absolute -inset-1.5"  />
          <span className="sr-only">View notifications</span>
                {/* <BellIcon aria-hidden="true" className="h-6 w-6" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                Your Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  </div>

  {/* Mobile Menu Panel */}
  <DisclosurePanel className="sm:hidden">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* Mobile Search Bar */}
      <div className="relative w-full">
        <input
          type="text"
          id="search-navbar-mobile"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          )}
        >
          {item.name}
        </DisclosureButton>
      ))}
      
      {/* Mobile Sign In/Log In Buttons */}
      <DisclosureButton
        as="a"
        href="/login"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Sign In
      </DisclosureButton>
      <DisclosureButton
        as="a"
        href="/register"
        className="block rounded-md px-3 py-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
      >
        Register
      </DisclosureButton>
    </div>
  </DisclosurePanel>
</Disclosure>

      </>
  );
};

export default Navigation;
