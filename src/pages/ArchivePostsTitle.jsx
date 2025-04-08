import { useState } from "react";
import styles from "./ArchivePostsTitle.module.css";
import { UseContext } from "../../context/contextONE";

export default function ArchivePostsTitle() {
  const { filterName, setFilterName } = UseContext();

  const [hideOrShow, setHideOrShow] = useState(false);

  const filterNameArray = [
    "all",
    "education",
    "news",
    "movies",
  ];

  function clickHandlerFunc(item) {
    setFilterName(item);
    setHideOrShow(false);
  }

  return (
    <div className={styles.archivePostsTitle}>
      <button onClick={() => setHideOrShow(!hideOrShow)}>
        {filterName} archive
        {!hideOrShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="4"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="4"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      {hideOrShow && (
        <ul>
          {filterNameArray.map((item) => (
            <li onClick={() => clickHandlerFunc(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
