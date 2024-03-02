import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-2 sm:flex sm:justify-center">
      <footer
        className="bg-indigo-950 w-full	  "
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20 ">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col ">
              <p className="w-full mt-2 text-xl font-bold text-white">
                Scan. Detect. Remove.
              </p>
              <div className="flex gap-4 my-5">
                {" "}
                <FaTwitterSquare className="text-white text-3xl" />
                <FaFacebookSquare className="text-white text-3xl" />
                <FaYoutubeSquare className="text-white text-3xl" />
              </div>
              <div className="flex gap-6 underline text-xs text-white">
                <Link to="/privacy">Privacy Policy </Link>
                <Link to="termsOfService">Terms of Service </Link>
              </div>

              <p className="w-full mt-2 text-xs  text-white">
                Copyright © 2022 Certo Software Limited | Registered in England
                & Wales No. 10072356
              </p>
              <p className="w-full mt-2 text-xs  text-white">
                Designed & developed by{" "}
                <Link
                  to="https://hasibul-islam365.netlify.app/"
                  className="underline"
                >
                  Hasibul Islam{" "}
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="font-semibold leading-6 uppercase text-white">
                    Miro.
                  </h3>
                  <hr />
                  <ul role="list" className="mt-4 space-y-3">
                    <li>
                      <a
                        href="/iphone"
                        className="text-sm font-bold text-yellow-400 hover:text-white"
                      >
                        - Android
                      </a>
                    </li>
                    <li>
                      <a
                        href="/android"
                        className="text-sm font-bold text-yellow-400 hover:text-white"
                      >
                        - Android
                      </a>
                    </li>
                    <li>
                      <a
                        href="/help"
                        className="text-sm font-bold text-yellow-400 hover:text-white"
                      >
                        - Help
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-sm font-bold text-yellow-400 hover:text-white"
                      >
                        - About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/insights"
                        className="text-sm font-bold text-yellow-400 hover:text-white"
                      >
                        - Insights
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden bg-yellow-600  p-4 rounded-2xl lg:justify-end md:grid md:grid-cols-1">
                <div className="w-full mt-12 md:mt-0">
                  <div className="mt-8 lg:justify-end xl:mt-0">
                    <h3 className="font-semibold leading-6 uppercase text-black">
                      Sign up to our newsletter
                    </h3>
                    <p className="mt-4 text-sm font-light text-white lg:ml-auto">
                      Receive the latest mobile security news, exclusive
                      discounts & offers straight to your inbox!
                    </p>
                    <div className="inline-flex items-center gap-2 mt-12 list-none lg:ml-auto">
                      <form
                        className="flex flex-col items-center justify-center max-w-sm mx-auto"
                        action=""
                      >
                        <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                          <input
                            name="email"
                            type="email"
                            className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                            placeholder="Email Address"
                            required=""
                          />
                          <button
                            type="button"
                            className="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                          >
                            <div style={{ position: "relative" }}></div>
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
          <div className="mt-8 md:mt-0 md:order-1">
            <span className="mt-2 text-sm font-light text-white">
              Copyright © 2024
              <a
                href="https://hasibul-islam365.netlify.app/"
                className="mx-2 text-yellow-300 font-bold underline hover:text-white"
                rel="noopener noreferrer"
              >
                Hasibul Islam
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
