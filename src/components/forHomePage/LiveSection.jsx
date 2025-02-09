import styles from "./LiveSection.module.css";

export default function LiveSection() {
  return (
    <>
      <div className={styles.liveSection}>
        <div className={styles.liveSectionHeader}>
          <div className={styles.liveTitle}>
            <div className={styles.liveIcon}>
              <div className={styles.liveIcon2}></div>
            </div>
            <h1> See Live </h1>
          </div>
          <h2 className={styles.liveCaption}>
            The deep-sea repair crews that fix the internet Th The deep-sea
            repair crews that fix the internet Th The deep-sea repair crews that
            fix the internet Th The deep-sea repair crews that fix the internet
            Th
          </h2>
        </div>

        <div className={styles.liveImageSection}>
          {/* play icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
            className={styles.playIcon}
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
          <img
            className={styles.liveImage}
            src="/images/deepSea.webp"
            alt="Live Image"
          />
        </div>
      </div>
    </>
  );
}
