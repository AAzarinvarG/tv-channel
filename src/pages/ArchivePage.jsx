import styles from "./ArchivePage.module.css";

import Navbar from "../components/Navbar";
import AllArchiveSection from "../components/forArchivePage/AllArchiveSection";
import EducationArchive from "../components/forArchivePage/EducationArchive";
import NewsArchive from "../components/forArchivePage/NewsArchive";
import Footer from "../components/Footer";

export default function ArchivePage() {
  return (
    <>
      <Navbar />
      <div className={styles.archivePage}>
        <div className={styles.archiveTitle}> Archive </div>

        <AllArchiveSection />
        <EducationArchive />
        <NewsArchive />
        <Footer />
      </div>
    </>
  );
}
