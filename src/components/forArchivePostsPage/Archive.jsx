import styles from "./Archive.module.css";

import { useNavigate } from "react-router-dom";
import { UseContext } from "../../../context/contextONE";

export default function Archive() {
  const navigate = useNavigate();
  const { selectedArchive, totalArray } = UseContext();

  const archive = totalArray.find(item => item.id === selectedArchive.id);

  return (
    <div className={styles.header}>
      <svg //close icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="size-6"
        className={styles.closeIcon}
        onClick={() => navigate("/archivePage/archivePosts")}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      <div
        className={styles.imgHeader}
        style={{ backgroundImage: `url(${archive.img})` }}
      >
        <svg //play icon
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
      </div>
      <div className={`${styles.archiveInfoSection} ${archive.category == "news" ? styles.centerContent : ""}`}>
        <div className={`${styles.timeAndGenreSection} ${archive.category == "news" ? styles.zeroMargin : ""}`}>
          <svg //share Icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className={styles.shareIcon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          <div>
            <h3>
              <span>
                <svg //genre icon
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className={styles.genreIcon}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                  />
                </svg>
              </span>
              {archive.genre}
            </h3>
            <h3>
              <span>
                <svg //clock icon
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className={styles.clockIcon}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              {archive.time} min
            </h3>
          </div>
        </div>
        {archive.category != "news" && (
          <>
            <section>
              <p> S </p>
              <h3> {archive.season} </h3>
            </section>
            <section>
              <p> E </p>
              <h3> {archive.episode} </h3>
            </section>
          </>
        )}
      </div>

      <div className={styles.descriptionSection}>
        <div className={styles.descriptionTitle}>
          <h2 className={styles.descriptionTxt}> Description </h2>
        </div>

        <h2 className={styles.archiveName}> {archive.name} </h2>

        <p>
          {archive.description}
        </p>
      </div>
    </div>
  );
}
