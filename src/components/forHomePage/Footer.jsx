import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <h3>
          X network website to see the live broadcast of the network, see the
          archive programs, collaborate with our team and see and read a lot of
          new world news and...
        </h3>

        <div className={styles.buttonsPagesSectionInFooter}>
          <button> live page </button>
          <button> veblog page </button>
          <button> archive page </button>
          <button> cooperate with us </button>
          <button> programs page </button>
        </div>

        <h2> made with ❤️ by AA </h2>
      </div>
    </>
  );
}
