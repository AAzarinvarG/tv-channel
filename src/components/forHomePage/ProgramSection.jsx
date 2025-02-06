import ProgramsImage from "./ProgramsImage";
import styles from "./ProgramSection.module.css";

export default function ProgramSection() {
  return (
    <>
      <div className={styles.programSection}>
        <ProgramsImage />
        <button className={styles.seeAllBtn}> See All </button>
      </div>
    </>
  );
}
