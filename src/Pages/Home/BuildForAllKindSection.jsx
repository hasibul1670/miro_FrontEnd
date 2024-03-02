/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import graphicsLogo from "../../assets/home/GraphicsLogo.png";
import heroSectionImage from "../../assets/home/uxdesignImage.png";
import CommonContainer from "../Shared/CommonContainer";
const BuildForAllKindSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <CommonContainer>
        <SectionTitle
          className="text-start"
          heading={"Built for all kinds of teams"}
        />
        <div className="lg:grid mt-10 lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse">
          <div className="lg:w-full w-full p-5	 ">
            <ChecklistItem>Build low-fi wireframes</ChecklistItem>
            <ChecklistItem>
              Involve stakeholders in the design process
            </ChecklistItem>
            <ChecklistItem>
              Involve stakeholders in the design process
            </ChecklistItem>

            <Link to="/signup">
              <button className="mt-5 text-xl  w-full max-w-full inline-flex items-center  font-semibold text-blue-700  rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-black">
                Learn More
                <FaLongArrowAltRight className="mt-1 ml-1 break-normal" />
              </button>
            </Link>

            <p className="text-xl mt-2">Integrate your favorite tools</p>
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="w-48 bg-red-400 mb-10  "
            >
              <img
                src={graphicsLogo}
                alt="heroSectionImage"
                className="w-full h-auto"
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
export default BuildForAllKindSection;

const ChecklistItem = ({ children }) => (
  <li className="flex mb-2">
    <GiCheckMark />
    <span className="ml-5">{children}</span>
  </li>
);
