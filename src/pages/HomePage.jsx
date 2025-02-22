// import styles from "./HomePage.module.css";

import Navbar from "../components/Navbar";
import ProgramSection from "../components/forHomePage/ProgramSection";
import LiveSection from "../components/forHomePage/LiveSection";
import WeblogSection from "../components/forHomePage/WeblogSection";
import EducationSection from "../components/forHomePage/EducationSection";
import ArchiveSection from "../components/forHomePage/ArchiveSection";
import CooperateWithUs from "../components/forHomePage/CooperateWithUs";
import SocialMediaSection from "../components/forHomePage/SocialMediaSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ProgramSection />
      <LiveSection />
      <WeblogSection />
      <EducationSection />
      <ArchiveSection />
      <CooperateWithUs />
      <SocialMediaSection />
      <Footer marginTopValue="69px" />
    </>
  );
}
