import styles from "./SeeMoreBtn.module.css";

export default function SeeMoreBtn({ theme }) {
  return (
    <>
      {theme === "green" ? (
        <div className={styles.seeMoreBtnSection}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className={styles.iconRight}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <h4> See more </h4>
        </div>
      ) : (
        <div className={styles.seeMoreBtnSectionYellow}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className={styles.iconRight}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <h4> See more </h4>
        </div>
      )}
    </>
  );
}
