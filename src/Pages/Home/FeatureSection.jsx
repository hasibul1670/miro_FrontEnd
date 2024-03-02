import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CardWithoutImage from "../Shared/CardWithoutImage";
import CommonContainer from "../Shared/CommonContainer";

const FeatureSection = () => {
  const cardData = [
    {
      title: "Free forever",
      description: (
        <>
          Our free plan gives you unlimited team members, 3 boards, and 300+
          expert-made templates. Signing up with your work email lets you bring
          in your team faster. See our{" "}
          <a className="text-blue-700" href="/pricePalns">
            pricing plans
          </a>
          for more features.
        </>
      ),
    },
    {
      title: "Easy integrations",
      description: (
        <>
          Miro has 100+ powerful integrations with tools you already use like G
          Suite, Slack, and Jira, so your workflow is seamless. View the full
          list in our{" "}
          <a className="text-blue-700" href="/marketplace">
            Marketplace
          </a>
          .
        </>
      ),
    },
    {
      title: "Security first",
      description: (
        <>
          We treat your data like you would — with the utmost care. We follow
          industry-leading security standards and give you tools to protect
          intellectual property. Learn more at our{" "}
          <a className="text-blue-700" href="/trustCenter">
            Trust Center
          </a>
          .
        </>
      ),
    },
  ];
  return (
    <div>
      <CommonContainer>
        <SectionTitle heading={" Collaborate without constraints"} />
        <div className="flex flex-wrap ">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="w-full flex justify-center sm:w-full lg:w-1/3 mb-4 lg:mb-0 mx-auto"
            >
              <CardWithoutImage
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/signup">
            <button className="  w-64 h-10 mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800  active:text-white focus-visible:outline-black">
              Sign up for
              <FaLongArrowAltRight className="mt-1 ml-1 break-normal" />
            </button>
          </Link>
        </div>
      </CommonContainer>
    </div>
  );
};
export default FeatureSection;
