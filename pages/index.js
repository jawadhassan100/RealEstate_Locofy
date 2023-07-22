import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import AreaFeatureContainer from "../components/area-feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header />
      <Hero />
      <AreasContainer />
      <AreaFeatureContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm/>
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
