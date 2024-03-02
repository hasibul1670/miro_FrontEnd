/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import heroSectionImage from "../../assets/home/Brainstormwithoutshadow.png";
import CommonContainer from "../Shared/CommonContainer";

const BrainStormSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <CommonContainer>
        <SectionTitle
          className="text-start"
          heading={"Built for the way you work"}
        />
        <div className="lg:grid mt-10 lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse">
          <div className="lg:w-full w-full p-5	 ">
            <h1 className="lg:text-7xl text-3xl font-bold">
              Connect your tools, close your tabs
            </h1>
            <h1 className="lg:text-2xl text-sm lg:mt-3">
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom, Miro has 100+ integrations with tools you
              already use and love.
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
export default BrainStormSection;
