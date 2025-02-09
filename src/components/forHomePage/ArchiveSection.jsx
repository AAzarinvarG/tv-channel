import styles from "./ArchiveSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ArchiveSection() {
  return (
    <>
      <div className={styles.archiveSection}>
        <div className={styles.archiveTitle}>
          <h3> Archive </h3>
        </div>
        <button className={styles.seeMoreBtn}> See More </button>

        <div className={styles.archivePostsSection}>
          <Swiper
            slidesPerView={1.25}
            className="mySwiper archiveSwiperSection"
            breakpoints={{
              380: {
                slidesPerView: 1.5,
              },

              480: {
                slidesPerView: 1.7,
              },

              520: {
                slidesPerView: 2.2,
              },

              640: {
                slidesPerView: 2.4,
              },

              730: {
                slidesPerView: 2.6,
              },

              830: {
                slidesPerView: 3.2,
              },

              1000: {
                slidesPerView: 3.5,
              },

              1150: {
                slidesPerView: 4.2,
              },

              1500: {
                slidesPerView: 4.7,
              },

              1660: {
                slidesPerView: 5.3,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trap.jpg" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trump2.webp" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trap.jpg" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trump2.webp" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trap.jpg" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trump2.webp" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trap.jpg" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.archivePost}>
                <div className={styles.imageHeader}>
                  <img src="/public/images/trump2.webp" alt="" />
                </div>
                <p>
                  Trap is a 2024 American psychological thriller film written,
                  directed, and...
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
