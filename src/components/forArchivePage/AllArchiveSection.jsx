import styles from "./AllArchiveSection.module.css";
import ArchiveTitleAndBtn from "./ArchiveTitleAndBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

export default function AllArchiveSection() {
  const [archiveTitlePostState, setArchiveTitlePostState] =
    useState("breaking bad");

  useEffect(() => {
    const archivePostTitle =
      archiveTitlePostState.length > 18
        ? archiveTitlePostState.slice(0, 18) + "..."
        : archiveTitlePostState;

    setArchiveTitlePostState(archivePostTitle);
  }, []);

  return (
    <section className={styles.allArchiveSection}>
      <ArchiveTitleAndBtn title="All Archive" />

      <div className={styles.allArchivePosts}>
        <Swiper slidesPerView={1.55} spaceBetween={0} className="mySwiper">
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.archivePost}>
              <img src="/images/breaking.jpg" alt="breakingBad" />
              <div>
                <h4>{archiveTitlePostState}</h4>
                <section>
                  <div className={styles.seasonDiv}>
                    <h4> S </h4>
                    <h3> 5 </h3>
                  </div>
                  <div className={styles.episodeDiv}>
                    <h4> E </h4>
                    <h3> 16 </h3>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
