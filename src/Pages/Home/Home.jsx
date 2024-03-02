import { Helmet } from "react-helmet-async";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import HybridWorkSection from "./HybridWorkSection";
import TrustedSection from "./TrustedSection";

const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title> miro | Home </title>
      </Helmet>

      <HeroSection />
      <TrustedSection />
      <FeatureSection />
      <HybridWorkSection />

      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
