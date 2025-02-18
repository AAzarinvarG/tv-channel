import styles from "./NewsArchive.module.css";
import ArchiveTitleAndBtn from "./ArchiveTitleAndBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

export default function NewsArchive() {
  const [archiveTitlePostState, setArchiveTitlePostState] =
    useState("world watch");

  useEffect(() => {
    const archivePostTitle =
      archiveTitlePostState.length > 18
        ? archiveTitlePostState.slice(0, 18) + "..."
        : archiveTitlePostState;

    setArchiveTitlePostState(archivePostTitle);
  }, []);

  return (
    <section className={styles.newsArchiveSection}>
      <ArchiveTitleAndBtn title="News Archive" />

      <div className={styles.newsArchivePosts}>
        <Swiper
          slidesPerView={1.55}
          spaceBetween={0}
          breakpoints={{
            360: {
              slidesPerView: 1.7,
            },
            400: {
              slidesPerView: 2.1,
            },
            460: {
              slidesPerView: 2.4,
            },
            530: {
              slidesPerView: 2.6,
            },
            590: {
              slidesPerView: 3.1,
            },
            715: {
              slidesPerView: 3.6,
            },
            1020: {
              slidesPerView: 4.2,
            },
            1150: {
              slidesPerView: 4.6,
            },
            1280: {
              slidesPerView: 5.2,
            },
            1450: {
              slidesPerView: 5.6,
            },
            1800: {
              slidesPerView: 6.2,
            },
            2100: {
              slidesPerView: 7.3,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/news2.jpg" alt="news image" />
              <div>
                <h4>{archiveTitlePostState}</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
