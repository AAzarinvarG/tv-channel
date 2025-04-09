import styles from "./Menu.module.css";
import { UseContext } from "../../context/contextONE";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const { menuStatus, setMenuStatus, setHomePageStatus } = UseContext();

  function clickOnCloseIconInMenu() {
    setMenuStatus(false);
    setHomePageStatus(true);
  }

  function handleResize() {
    if (innerWidth > 920) {
      setMenuStatus(false);
      setHomePageStatus(true);
    }
  }

  window.addEventListener("resize", handleResize);

  return (
    <section className={`${styles.menu1} ${menuStatus ? styles.open : ""}`}>
      <svg // close icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
        className={styles.closeIcon}
        onClick={() => clickOnCloseIconInMenu()}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>

      <section>
        <div
          className={styles.pageLink}
          onClick={() => {
            clickOnCloseIconInMenu();
            navigate("/live");
          }}
        >
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
              d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <h3 className={styles.pageName}>Live Page</h3>
        </div>
        <div
          className={styles.pageLink}
          onClick={() => {
            clickOnCloseIconInMenu();
            navigate("/archivePage");
          }}
        >
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
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
          <h3 className={styles.pageName}>Archive Page</h3>
        </div>
        <div
          className={styles.pageLink}
          onClick={() => {
            clickOnCloseIconInMenu();
            navigate("/programs");
          }}
        >
          <img src="/icon/video.svg" alt="Video Icon" />
          <h3 className={styles.pageName}>Programs Page</h3>
        </div>
        <div
          className={styles.pageLink}
          onClick={() => {
            clickOnCloseIconInMenu();
            navigate("/cooperatewithus");
          }}
        >
          <img src="/icon/handshake.svg" alt="Handshake Icon" />
          <h3 className={styles.pageName}>Cooperate With Us Page</h3>
        </div>
      </section>
    </section>
  );
}
