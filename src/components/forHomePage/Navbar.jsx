import styles from "./Navbar.module.css";
import { UseContext } from "../../../context/contextONE";

export default function Navbar() {
  const { setMenuStatus, setHomePageStatus } = UseContext();

  function clickOnHamburgerMenuIcon() {
    setMenuStatus(true);
    setHomePageStatus(false);
  }

  return (
    <>
      <div className={styles.navbar}>
        <section>
          <svg //hamburger icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className={styles.hamburgerIcon}
            onClick={() => clickOnHamburgerMenuIcon()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg //tv icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className={styles.logo}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
          <div className={styles.headerBtnInNavbar}>
            <button> Live Page </button>
            <button> Archive Page </button>
            <button> Programs Page </button>
            <button> Cooperate With Us Page </button>
          </div>
        </section>
        <button className={styles.loginBtn}> Login </button>
      </div>
    </>
  );
}
