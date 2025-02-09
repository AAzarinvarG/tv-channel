import styles from "./CooperateWithUs.module.css";
import { UseContext } from "../../../context/contextONE";

export default function CooperateWithUs() {
  const { windowWidth } = UseContext();

  return (
    <>
      <div className={styles.cooperateWithUsSection}>
        <div className={styles.cooperateWithUsTitle}>
          <h3> Cooperate With Us </h3>
        </div>
        {windowWidth < 1100 ? (
          <div className={styles.cooperateImageAndTextAndBtnHeader}>
            <img src="/images/handing.jpg" alt="two hand" />
            <div className={styles.cooperateWithUsTextHeader}>
              <h3> Use the button below to cooperate with us. </h3>
              <button> Go There </button>
            </div>
          </div>
        ) : (
          <div className={styles.headerImageHanding}>
            <h3> Use the button below to cooperate with us. </h3>
            <button> Go There </button>
          </div>
        )}
      </div>
    </>
  );
}
