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
            400: {
              slidesPerView: 2.2,
            },
            500: {
              slidesPerView: 2.4,
            },
            600: {
              slidesPerView: 2.7,
            },
            800: {
              slidesPerView: 3.2,
            },
            1000: {
              slidesPerView: 3.6,
            },
            1150: {
              slidesPerView: 4.3,
            },
            1320: {
              slidesPerView: 4.6,
            },
            1420: {
              slidesPerView: 5.3,
            },
            1600: {
              slidesPerView: 5.6,
            },
            1700: {
              slidesPerView: 6.3,
            },
          }}
          className="mySwiper weblogSectionSwiper"
        >
          <SwiperSlide>
            <div className={styles.blog}>
              {/* overflow hidden */}
              <div className={styles.imgHeader}>
                <img src="/public/images/coca.jpg" alt="coca image" />
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
                <img src="/public/images/dog.jpg" alt="coca image" />
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
                <img src="/public/images/coca.jpg" alt="coca image" />
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
                <img src="/public/images/dog.jpg" alt="coca image" />
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
                <img src="/public/images/coca.jpg" alt="coca image" />
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
                <img src="/public/images/dog.jpg" alt="coca image" />
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
                <img src="/public/images/coca.jpg" alt="coca image" />
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
                <img src="/public/images/dog.jpg" alt="coca image" />
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
