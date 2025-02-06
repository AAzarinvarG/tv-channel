import styles from "./AllArchiveSection.module.css";

export default function AllArchiveSection() {
  return (
    <section className={styles.allArchiveSection}>
      <div className={styles.allArchiveTitleAndBtn}>
        <h3> All Archive </h3>
        <button> See more </button>
      </div>

      <div className={styles.allArchivePosts}>
        
      </div>
    </section>
  );
}
