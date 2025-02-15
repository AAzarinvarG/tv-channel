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
        <Swiper slidesPerView={1.55} spaceBetween={0} className="mySwiper">
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
