import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//css import
import styles from "./ProgramsImage.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperCustomizeStyleForProgramSection.css";
import { useEffect, useState } from "react";

export default function ProgramsImage() {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => checkingScreenSize, []);
  window.addEventListener("resize", () => checkingScreenSize());

  function checkingScreenSize() {
    window.innerWidth > 520 ? setWindowSize("big") : setWindowSize("small");
  }

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`${styles.imageAndName}`}>
            <div className={styles.headerImage}>
              <div className={styles.gradient}></div>

              {windowSize === "small" ? (
                <img
                  src="/images/frenzy.jpg"
                  alt=""
                  className={styles.image1}
                />
              ) : (
                <img
                  src="/images/frenzy2.png"
                  alt=""
                  className={styles.image1}
                />
              )}
            </div>

            {/* Program Name */}
            <h1 className={styles.programName}> Frenzy </h1>
            {/* Program Genre */}
            <div className={styles.programGenreSection}>
              {/* label Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className={styles.labelIcon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>
              <p className={styles.programGenre}>Thriller & Crime</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.imageAndName}`}>
            <div className={styles.headerImage}>
              <div className={styles.gradient}></div>

              {windowSize === "small" ? (
                <img src="/images/joker.jpg" alt="" className={styles.image1} />
              ) : (
                <img
                  src="/images/jokerbigsize.jpg"
                  alt=""
                  className={styles.image1}
                />
              )}
            </div>

            {/* Program Name */}
            <h1 className={styles.programName}> Joker: Folie à Deux </h1>
            {/* Program Genre */}
            <div className={styles.programGenreSection}>
              {/* label Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className={styles.labelIcon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>
              <p className={styles.programGenre}> Musical & Thriller </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.imageAndName}`}>
            <div className={styles.headerImage}>
              <div className={styles.gradient}></div>

              {windowSize === "small" ? (
                <img
                  src="/public/images/challengersMain.jpg"
                  alt=""
                  className={styles.image1}
                />
              ) : (
                <img
                  src="/public/images/challengersBigSize.jpg"
                  alt=""
                  className={styles.image1}
                />
              )}
            </div>

            {/* Program Name */}
            <h1 className={styles.programName}> Challengers </h1>
            {/* Program Genre */}
            <div className={styles.programGenreSection}>
              {/* label Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className={styles.labelIcon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>
              <p className={styles.programGenre}>Sport & Romance </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.imageAndName}`}>
            <div className={styles.headerImage}>
              <div className={styles.gradient}></div>

              {windowSize === "small" ? (
                <img
                  src="/public/images/aDifferentManMain.jpg"
                  alt=""
                  className={styles.image1}
                />
              ) : (
                <img
                  src="/public/images/diff.jpg"
                  alt=""
                  className={styles.image1}
                />
              )}
            </div>

            {/* Program Name */}
            <h1 className={styles.programName}> A Different Man </h1>
            {/* Program Genre */}
            <div className={styles.programGenreSection}>
              {/* label Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className={styles.labelIcon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>
              <p className={styles.programGenre}>Thriller & Drama</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
