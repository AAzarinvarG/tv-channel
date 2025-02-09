import styles from "./WeblogSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function WeblogSection() {
  return (
    <div className={styles.weblogSection}>
      <div className={styles.weblogTitle}>
        <h3> Blogs </h3>
      </div>
      <button className={styles.seeMoreBtn}> See More </button>

      <div className={styles.blogsSection}>
        <Swiper
          slidesPerView={1.6}
          spaceBetween={0}
          breakpoints={{
            370: {
              slidesPerView: 2.2,
            },
            400: {
              slidesPerView: 1.7,
            },
            470: {
              slidesPerView: 2.4,
            },
            500: {
              slidesPerView: 2.4,
            },
            560: {
              slidesPerView: 2.6,
            },
            600: {
              slidesPerView: 2.7,
            },
            680: {
              slidesPerView: 3.3,
            },
            800: {
              slidesPerView: 3.8,
            },
            1000: {
              slidesPerView: 3.6,
            },
            1060: {
              slidesPerView: 4.2,
            },
            1150: {
              slidesPerView: 4.4,
            },
            1300: {
              slidesPerView: 4.7,
            },
            1400: {
              slidesPerView: 5.3,
            },
            1500: {
              slidesPerView: 5.6,
            },
            1620: {
              slidesPerView: 6.3,
            },
            1700: {
              slidesPerView: 6.6,
            },
          }}
          className="mySwiper weblogSectionSwiper"
        >
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/coca.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/dog.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/coca.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/dog.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/coca.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/dog.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/coca.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/images/dog.jpg" alt="coca image" />
              </div>
              <p> What problems does drinking soda cause us? </p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo odio ipsa aperiam aliquam consequuntur nam, dolorum
                tempore est tempora, sint veniam? Nobis, laudantium totam.
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
