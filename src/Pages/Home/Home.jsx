import { Helmet } from "react-helmet-async";
import BrainStormSection from "./BrainStormSection";
import BuildForAllKindSection from "./BuildForAllKindSection";
import ClientReviewSection from "./ClientReviewSection";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import HybridWorkSection from "./HybridWorkSection";
import M3Intregation from "./M3Intregation";
import TrustedSection from "./TrustedSection";
import WayWeWorkSection from "./WayWeWorkSection";

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
      <ClientReviewSection />

      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
