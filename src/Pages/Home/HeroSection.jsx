/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import getAppImage from "../../assets/home/getAppImage.png";
import heroSectionImage from "../../assets/home/heroImage.png";
import CommonContainer from "../Shared/CommonContainer";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <CommonContainer>
        <div className="lg:grid mt-10 lg:grid-cols-2 p-5 mx-auto flex flex-col-reverse">
          <div className="lg:w-4/5 w-full p-5	 ">
            <h1 className="lg:text-7xl text-3xl font-bold">
              Take idea from better to best
            </h1>
            <h1 className="lg:text-2xl text-sm lg:mt-3">
              Miro is your team's visual platform to connect, collaborate, and
              create — together.
            </h1>

            <input
              type="text"
              placeholder="Enter your work email here"
              className="input w-full max-w-full mt-2"
            />

            <Link to="/signup">
              <button className="  w-full max-w-full h-10 mt-2 inline-flex items-center justify-center  text-sm font-semibold text-white bg-blue-500 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800  active:text-white focus-visible:outline-black">
                Sign up for
                <FaLongArrowAltRight className="mt-1 ml-1 break-normal" />
              </button>
            </Link>
            <p className="text-sm mt-2">Collaborate with your team within minutes</p>
            <div
              data-aos="fade-right "
              data-aos-duration="800"
              className="w-1/8 mb-10 md:mb-0 mx-auto"
            >
              <img
                src={getAppImage}
                alt="heroSectionImage"
                className="w-full h-auto mt-5"
              />
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-1/8 mb-10 md:mb-0 mx-auto"
          >
            <img
              src={heroSectionImage}
              alt="heroSectionImage"
              className="w-full h-auto"
            />
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};
export default HeroSection;
