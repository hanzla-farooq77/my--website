import React from 'react'
import { Link,NavLink } from 'react-router-dom';
export default function Header() {
  return (
      <header className=" w-full shadow sticky z-50 top-0">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <img
                          src="https://img.icons8.com/?size=80&id=8bVNpI807DcA&format=png"
                          className="mr-3 h-12"
                          alt="Logo"
                      />
                  </Link>
                  <div className="flex items-center lg:order-2">
                      <Link
                          to="#"
                          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </Link>
                      <Link
                          to="#"
                          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Get started
                      </Link>
                  </div>
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                              to='/'
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3
                                      duration-200 border-b border-gray-100 ${isactive?"bg-green":"bg-grey"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>

                          <li>
                              <NavLink
                              to="about"
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3
                                      duration-200 border-b border-gray-100 ${isactive?"bg-green":"bg-grey"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                              >
                                  About
                              </NavLink>
                          </li>

                          <li>
                              <NavLink
                              to="contact"
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3
                                      duration-200 border-b border-gray-100 ${isactive?"bg-green":"bg-grey"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                              >
                                  Contact Me
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                              to="instagram"
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3
                                      duration-200 border-b border-gray-100 ${isactive?"bg-green":"bg-grey"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                              >
                                  Instagram
                              </NavLink>
                          </li>
                           
                         
                        
                         
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
};