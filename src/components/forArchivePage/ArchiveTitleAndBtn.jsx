import styles from "./ArchiveTitleAndBtn.module.css";
import { useNavigate } from "react-router-dom";

export default function ArchiveTitleAndBtn({ title }) {
  const navigate = useNavigate();

  return (
    <div className={styles.archiveTitleAndBtn}>
      <h3> {title} </h3>
      <button onClick={() => navigate("/archivePosts")}> See more </button>
    </div>
  );
}
