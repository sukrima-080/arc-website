import HeroMain from "../components/HeroMain";
import TechEventStats from "../components/EventStats";
import EventArtGallery from "../components/Art";
import { BackgroundPaths } from "../components/bits/ui/background-paths";
import Carousel from "../components/Carousel";
import Marquee from "../components/Marquee";
import EventFaqs from "../components/Faqs";

import RegistrationForms from "../components/Forms";
import EventDetails from "../components/EventDetailstemp";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import RegistrationDataSlabs from "../components/Register";
import RegistrationDeadlineModal from "../components/DeadLinePopup";
// import EventDetailsG from "../components/EventDetailsG";

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col">
        <BackgroundPaths title="A Fusion of Bots, Bytes, and Brilliance." />
        <TechEventStats /> 
        <Marquee />
        <HeroMain /> 
       <EventArtGallery /> 


        <EventDetails/> 
        <RegistrationDataSlabs/>
      
      <RegistrationForms/> 
      <RegistrationDeadlineModal/>
        <EventFaqs />
        <AboutUs />
        <Footer/>
        <Carousel />
      </div>
    </>
  );
}
