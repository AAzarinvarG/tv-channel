import styles from "./ArchiveTitleAndBtn.module.css";

export default function ArchiveTitleAndBtn({title}) {
  return (
    <div className={styles.archiveTitleAndBtn}>
      <h3> {title} </h3>
      <button> See more </button>
    </div>
  );
}
