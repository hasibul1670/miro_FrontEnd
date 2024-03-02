/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import trustedSectionImage from "../../assets/home/trustedSectionImage.png";
import CommonContainer from "../Shared/CommonContainer";

const TrustedSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <CommonContainer>
     

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="w-1/8 mb-10 h-50  md:mb-0 mx-auto"
        >
          <img
            src={trustedSectionImage}
            alt="heroSectionImage"
            className="w-full h-auto bg-white"
          />
        </div>
      </CommonContainer>
    </div>
  );
};
export default TrustedSection;
