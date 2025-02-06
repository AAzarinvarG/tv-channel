import styles from "./ArchivePage.module.css";

import Navbar from "../components/forHomePage/Navbar";
import AllArchiveSection from "../components/forArchivePage/AllArchiveSection";

export default function ArchivePage() {
  return (
    <>
      <Navbar />
      <div className={styles.archiveSection}>
        <div className={styles.archiveTitle}> Archive </div>

        <AllArchiveSection />
      </div>
    </>
  );
}
