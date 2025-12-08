import HeroMain from "../components/HeroMain";
import TechEventStats from "../components/EventStats";
import EventArtGallery from "../components/Art";
import { BackgroundPaths } from "../components/bits/ui/background-paths";
import Carousel from "../components/Carousel";
import Marquee from "../components/Marquee";
import EventFaqs from "../components/Faqs";
import Timeline from "../components/Timeline";
import RegistrationForms from "../components/Forms";
import EventDetails from "../components/EventDetails";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import RegistrationDataSlabs from "../components/Register";
import RegistrationDeadlineModal from "../components/DeadLinePopup";
import BotPosterCard from "../components/Poster";
// import EventDetailsG from "../components/EventDetailsG";

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col"> 
        <BotPosterCard/>
        <BackgroundPaths title="A Fusion of Bots, Bytes, and Brilliance." />
        <TechEventStats /> 
        <Marquee />
        <HeroMain /> 
        <EventArtGallery /> 


        <EventDetails/> 

        <RegistrationDataSlabs/>
      <RegistrationDeadlineModal/>
        <RegistrationForms/>
        <EventFaqs />
        {/* <AboutUs /> */}
        <Timeline />
        <Footer/>
        <Carousel />
      </div>
    </>
  );
}
