/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import heroSectionImage from "../../assets/home/Brainstormwithoutshadow.png";
import CommonContainer from "../Shared/CommonContainer";
import TabButtonComponent from "../Shared/TabButtonComponent";

const BrainStormSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const buttonLabels = [
    "Brainstorming",
    "Diagramming",
    "Meetings & Workshops",
    "Scrum Events",
    "Mapping",
    "Research & Design",
    "Strategic Planning",
  ];

  return (
    <div>
      <CommonContainer>
        <SectionTitle
          className="text-start"
          heading={"Built for the way you work"}
        />
        <TabButtonComponent buttonLabels={buttonLabels} />
        <div className="lg:grid mt-10 lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse">
          <div className="lg:w-full w-full p-5	 ">
            <h1 className="lg:text-2xl font-semibold text-sm lg:mt-3">Brainstorming</h1>
            <h1 className="lg:text-xl text-sm lg:mt-3">
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
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
