import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Projectinside from '../Projects/Projectinside';
import Contactinside from '../Contact/Contactinside';
import Aboutinside from '../About/Aboutinside';
import { icon } from '../assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="text-gray-300 body-font relative">
        <div className="px-4 sm:px-6 lg:px-8 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src={icon} alt="logo" className="w-8 h-8" />
            <span className="ml-3 text-white text-xl">Srujan Kumar</span>
          </Link>
          <button
            className="md:hidden absolute top-4 right-4 inline-flex items-center p-2 rounded-md text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav
            className={`${
              menuOpen ? 'flex flex-col items-center' : 'hidden'
            } md:flex md:flex-wrap items-center text-base justify-center md:ml-4 mt-4 md:mt-0`}
          >
            <Link to="/" className="my-2 md:mx-4 hover:text-white text-xl">
              Home
            </Link>
            <Link
              to="/Aboutinside"
              className="my-2 md:mx-4 hover:text-white text-xl"
            >
              About
            </Link>
            <Link
              to="/Projectinside"
              className="my-2 md:mx-4 hover:text-white text-xl"
            >
              Projects
            </Link>
            <Link
              to="/Contactinside"
              className="my-2 md:mx-4 hover:text-white text-xl"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
