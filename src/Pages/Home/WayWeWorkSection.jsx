/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import wayWeWorkSectionImage from "../../assets/home/wayweworkd.png";
import CommonContainer from "../Shared/CommonContainer";

const WayWeWorkSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const containerStyle = {
    background: `url(${wayWeWorkSectionImage}) center/cover no-repeat`,
    height: "50vh", // Adjust the height as needed
  };

  return (
    <div>
      <CommonContainer>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="w-1/8 mb-10 md:mb-0 mx-auto flex items-center justify-end "
          style={containerStyle}
        >
          <div className="  flex flex-col justify-center lg:px-20 lg:mt-1 mt-20">
            <h1 className="text-2xl font-bold flex justify-center ">
              The Ways We Work
            </h1>
            <h1 className="lg:text-xl  mt-2 flex justify-center">
              How has our relationship with work changed?
            </h1>
            <div className=" mt-5 flex justify-center">
              <Link to="/signup">
                <button className="  w-64 h-10 mt-1 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800  active:text-white focus-visible:outline-black">
                  View the report
                  <FaLongArrowAltRight className="mt-1 ml-1 break-normal" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default WayWeWorkSection;
