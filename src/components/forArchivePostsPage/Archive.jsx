import styles from "./Archive.module.css";

import { useNavigate } from "react-router-dom";

export default function Archive() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="size-6"
        onClick={() => navigate("/archivePage/archivePosts")}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
