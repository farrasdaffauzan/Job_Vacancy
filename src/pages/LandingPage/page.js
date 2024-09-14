import FooterLayout from "../../components/Footer";
import About from "../../components/LandingPage/About";
import PlatformBenefits from "../../components/LandingPage/BenefitPlatform";
import Content from "../../components/LandingPage/Content";
import Hero from "../../components/LandingPage/Hero";
import Statistics from "../../components/LandingPage/Statistics";
import Navbar from "../../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Content />
        <PlatformBenefits />
        <Statistics />
        <FooterLayout />
      </div>
    </>
  );
};

export default LandingPage;
