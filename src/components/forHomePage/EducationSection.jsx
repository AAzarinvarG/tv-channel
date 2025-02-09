import styles from "./EducationSection.module.css";
import { UseContext } from "../../../context/contextONE";

export default function EducationSection() {
  const { windowWidth } = UseContext();

  return (
    <>
      <div className={styles.educationSection}>
        <div className={styles.educationTitle}>
          <h4> Education </h4>
        </div>

        <div className={styles.videoEducationSection}>
          {/* left icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <div>
            {windowWidth > 949 ? (
              <img src="/public/images/dicover.jpg" alt="" />
            ) : (
              <img src="/public/images/tommarow.jpg" alt="" />
            )}
            {/* play icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          {/* right icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className={styles.rightIcon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <div className={styles.detailEducationSection}>
          <h4> Tommarow's World Today </h4>
          <button> Show detail </button>
        </div>
      </div>
    </>
  );
}
