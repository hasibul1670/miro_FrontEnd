import { Helmet } from "react-helmet-async";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import TrustedSection from "./TrustedSection";
import FeatureSection from "./FeatureSection";

const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title> miro | Home </title>
      </Helmet>

      <HeroSection />
      <TrustedSection />
      <FeatureSection />

      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
