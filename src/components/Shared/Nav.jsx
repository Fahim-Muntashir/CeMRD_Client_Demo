import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            href="https://massivegrowth.net/"
            className="flex items-center space-x-4 rtl:space-x-reverse"
          >
            <img
              src="https://i.ibb.co/HpYr1kc/logo.png"
              className="w-40"
              alt=""
            />
          </Link>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse md:hidden">
            {isMenuOpen ? (
              <button
                className="block py-2 px-3 text-black bg-primary rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                onClick={closeMenu}
              >
                <IoClose className="text-4xl" />
              </button>
            ) : (
              <button
                data-collapse-toggle="navbar-language"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-language"
                aria-expanded={isMenuOpen}
                onClick={openMenu}
              >
                <span className="sr-only">Open main menu</span>
                <GiHamburgerMenu className="text-4xl" />
              </button>
            )}
          </div>

          <div className="flex items-center md:order-2 hidden md:block">
            <button className="btn bg-primary py-2 px-6 md:px-10 font-bold rounded-lg text-black ">
              Contact Now
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
