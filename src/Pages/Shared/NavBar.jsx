import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLeftButtons from "./ButtonComponent";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="w-full mx-auto  border-b 2xl:max-w-7xl">
        <div className="relative flex flex-col w-full p-5 mx-auto  md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <Link className="text-lg  font-bold  lg:text-2xl" to="/">
              <span className="lg:text-l small ">miro</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className={!open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`flex-col items-center flex-grow ${
              open ? "flex" : "hidden"
            } md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            {/* DropDowns */}
            <Dropdown dropdownName="Product" />
            <Dropdown dropdownName="Solutions" />
            <Dropdown dropdownName="Resources" />
            <Link
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
              to="/contactUs"
            >
              Enterprise
            </Link>
            <Link
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
              to="/contactUs"
            >
              Pricing
            </Link>

            <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
              {/* <Link to="/changeLanguage">
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black bg-white rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white active:bg-blue-800 active:text-white focus-visible:outline-black ">
                  <CiGlobe className="text-xl font-bold" /> EN
                </button>
              </Link>
              <Link to="/contactSales">
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black bg-white rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white active:bg-gray-800 active:text-white focus-visible:outline-black ">
                  Contact Sales
                </button>
              </Link>
              <Link to="/login">
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black bg-white rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white active:bg-gray-800 active:text-white focus-visible:outline-black ">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
                  Sign up for <FaLongArrowAltRight className="mt-1 ml-1" />
                </button>
              </Link> */}

              <NavbarLeftButtons />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
