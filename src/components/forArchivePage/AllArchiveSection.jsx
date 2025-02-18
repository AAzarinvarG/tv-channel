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
