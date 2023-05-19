import React, { useState } from "react";
import {
  faTimes,
  faBars,
  faCartPlus,
  faUser,
  faSearch,
  faLifeRing,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuIconToggle, setMenuIconToggle] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setMenuIconToggle(!isMenuIconToggle);
  };

  return (
    <nav className="sticky top-0 z-10  px-5 flex justify-between items-center h-22 bg-white  drop-shadow-md w-full">
      {/* Logo */}
      <div className="">
        <Link to="/">
          <img src={Logo} className="w-16" alt="Logo" />
          <h1 className="text-black hover:text-orange-300 font-bold text-xl mt-0">
            Foodiza
          </h1>
        </Link>
      </div>

      <div
        id="main-nav"
        className={`${
          isMenuOpen ? "" : "hidden"
        } absolute top-14 right-0 px-5 py-10 bg-gray-700 h-screen flex flex-col md:flex md:space-y-0 md:relative md:top-0 md:right-0 md:p-0 md:flex-row md:h-full md:flex-grow md:justify-end md:items-center md:ml-10 md:bg-inherit`}
      >
        <form className="mb-10 md:mb-0 md:pr-8 flex items-center" action="">
          <input
            className="w-72 py-1 pl-3 pr-10 rounded-full  text-black font-semibold focus:outline-0"
            type="text"
            placeholder="Search Restaurants.."
            name="search"
          />
          <button className="-ml-8 border-6 text-orange-700" type="submit">
            <FontAwesomeIcon icon={faSearch} className="fa-solid" />
          </button>
        </form>

        <div className=" flex flex-col gap-10 text-black space-y-3 md:flex-row md:items-start md:space-y-0 md:space-x-3">
          <ul className="flex py-9  gap-16">
            <li className="text-black" href="#">
              <Link
                to="/offers"
                className="py-2  bg-white rounded-2xl hover:text-orange-400"
              >
                <FontAwesomeIcon icon={faTags} />
                <span className="hidden ml-2 font-proxima md:inline">
                  Offers
                </span>
              </Link>
            </li>
            <li className="hover:text-black" href="#">
              <Link
                to="/help"
                className="py-2  bg-white rounded-2xl hover:text-orange-400"
              >
                <FontAwesomeIcon icon={faLifeRing} />
                <span className="hidden ml-2 font-proxima md:inline">help</span>
              </Link>
            </li>
            <li className="hover:text-black" href="#">
              <Link
                className="py-2 bg-white rounded-2xl hover:text-orange-400"
                to="/signin"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="hidden ml-2 font-proxima md:inline">
                  {" "}
                  Sign in
                </span>
              </Link>
            </li>

            <li className="hover:text-black" href="#">
              <Link
                to="/cart"
                className="py-2  bg-white rounded-2xl hover:text-orange-400"
              >
                <FontAwesomeIcon icon={faCartPlus} />
                <span className="hidden ml-2 font-proxima md:inline">Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a
        className="md:hidden text-white text-2xl"
        href="javascript:void(0)"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={isMenuIconToggle ? faTimes : faBars}
          className="fa-solid"
        />
      </a>
    </nav>
  );
}

export default Navbar;
