import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { CardWithImage } from "../Shared/CardWithoutImage";
import CommonContainer from "../Shared/CommonContainer";
import { FaLongArrowAltRight } from "react-icons/fa";

const ClientReviewSection = () => {
  const cardData = [
    {
      title: "Vmware",
      personName: "Roxanne Mustafa",
      designation: "Design Team Lead at VMware",
      description: (
        <>
          “When the pandemic hit, those of us who thrive on in-person
          collaboration were worried that our creativity and productivity would
          suffer. Miro was the perfect tool to help us with collaboration,
          whiteboarding, and retrospectives while remote.”
        </>
      ),
    },
    {
      title: "DocuSign ",
      personName: "Jane Ashley ",
      designation: "Head of Design at DocuSign ",
      description: (
        <>
          “Miro helps solve one of the major gaps in product design: how to
          manage tasks across product designers whose projects are in different
          tools.”
        </>
      ),
    },
    {
      title: "frog",
      personName: "Laura Baird",
      designation: "Associate Design Director at frog ",
      description: (
        <>
          “As we used Miro we moved from skepticism to belief to innovation, and
          now we have a tool that’s at the core of what we do and will continue
          to extend into the future.”
        </>
      ),
    },
  ];
  return (
    <div>
      <CommonContainer>
        <SectionTitle heading={"Loved by the world's best teams"} />
        <div className="flex justify-center mt-5">
          <Link to="/signup">
            <button className="  w-64 h-10 mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-700 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border-2 r ">
              See all customer stories
              <FaLongArrowAltRight className="mt-1 ml-1 break-normal" />
            </button>
          </Link>
        </div> 
        <div className="flex flex-wrap ">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="w-full flex justify-center sm:w-full lg:w-1/3 mb-4 lg:mb-0 mx-auto"
            >
              <CardWithImage
                title={data.title}
                description={data.description}
                personName={data.personName}
                designation={data.designation}
              />
            </div>
          ))}
        </div>
      </CommonContainer>
    </div>
  );
};
export default ClientReviewSection;
