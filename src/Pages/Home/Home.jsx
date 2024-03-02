import { Helmet } from "react-helmet-async";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="bg-base-300">
      <Helmet>
        <title> miro | Home </title>
      </Helmet>

      <HeroSection />

      <FAQ />
    </div>
  );
};

export default Home;
