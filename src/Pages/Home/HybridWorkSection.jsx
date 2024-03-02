/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroSectionImage from "../../assets/home/heroImage.png";
import CommonContainer from "../Shared/CommonContainer";

const HybridWorkSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <CommonContainer>
        <div className="lg:grid mt-10 lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse">
          <div className="lg:w-full w-full p-5	 ">
            <h1 className="lg:text-7xl text-3xl font-bold">
              Work together, wherever you work
            </h1>
            <h1 className="lg:text-2xl text-sm lg:mt-3">
              In the office, remote, or a mix of the two, with Miro, your team
              can connect, collaborate, and co-create in one space no matter
              where you are.
            </h1>

            <Link to="/signup">
              <button className="mt-5 text-xl  w-full max-w-full inline-flex items-center  font-semibold text-blue-700  rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-black">
                Learn More
                <FaLongArrowAltRight className="mt-1 ml-1 break-normal" />
              </button>
            </Link>
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
export default HybridWorkSection;
