import { Helmet } from "react-helmet-async";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import HybridWorkSection from "./HybridWorkSection";
import TrustedSection from "./TrustedSection";
import M3Intregation from "./M3Intregation";
import WayWeWorkSection from "./WayWeWorkSection";
import BrainStormSection from "./BrainStormSection";
import BuildForAllKindSection from "./BuildForAllKindSection";

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
      <M3Intregation />
      <WayWeWorkSection />
      <BrainStormSection />
      <BuildForAllKindSection />

      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
