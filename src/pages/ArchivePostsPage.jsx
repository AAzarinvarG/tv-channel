import styles from "./ArchivePostsPage.module.css";

import Navbar from "../components/Navbar";
import ArchivePostsTitle from "../components/forArchivePostsPage/ArchivePostsTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useReducer } from "react";
import { UseContext } from "../../context/contextONE";
import { Outlet, useNavigate } from "react-router-dom";

const initialState = {
  array1: [],
  array2: [],
  array3: [],
  array4: [],
  totalNumberPages: null,
  pageNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "setTotalNumberPages":
      return { ...state, totalNumberPages: action.value };
    case "setPageNumber":
      return { ...state, pageNumber: action.value };
    case "setForArray1":
      return { ...state, array1: action.value };
    case "setForArray2":
      return { ...state, array2: action.value };
    case "setForArray3":
      return { ...state, array3: action.value };
    case "setForArray4":
      return { ...state, array4: action.value };
  }
}

export default function ArchivePostsPage() {
  const navigate = useNavigate();

  const [
    { array1, array2, array3, array4, totalNumberPages, pageNumber },
    dispatch,
  ] = useReducer(reducer, initialState);

  const { filterName } = UseContext();

  let totalArray = [
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/news.jpeg",
      name: "in focus",
      category: "news",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/breaking.jpg",
      name: "breaking bad",
      season: 5,
      episode: 16,
      category: "movies",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
    {
      img: "/images/cosmos.jpg",
      name: "a spacetime odyssey",
      season: 1,
      episode: 7,
      category: "education",
    },
  ];

  const array = totalArray.filter((item) => {
    if (filterName === "all") return item;
    return item.category === filterName;
  });

  const finalArray = array.map((item) => {
    if (item.name.length > 10 && !item.name[9].includes(" ")) {
      return { ...item, name: item.name.slice(0, 10) + "..." };
    } else if (item.name.length > 10 && item.name[9].includes(" ")) {
      return { ...item, name: item.name.slice(0, 9) + "..." };
    } else {
      return item;
    }
  });

  useEffect(() => {
    dispatch({ type: "setPageNumber", value: 0 });
  }, [filterName]);

  useEffect(() => {
    dispatch({
      type: "setTotalNumberPages",
      value: Math.ceil(finalArray.length / 40),
    });

    const startNumber = pageNumber * 40;

    dispatch({
      type: "setForArray1",
      value: finalArray.slice(startNumber, startNumber + 10),
    });
    dispatch({
      type: "setForArray2",
      value: finalArray.slice(startNumber + 10, startNumber + 20),
    });
    dispatch({
      type: "setForArray3",
      value: finalArray.slice(startNumber + 20, startNumber + 30),
    });
    dispatch({
      type: "setForArray4",
      value: finalArray.slice(startNumber + 30, startNumber + 40),
    });
  }, [pageNumber, filterName]);

  return (
    <>
      <Outlet />
      <Navbar />
      <div className={styles.archivePostsPage}>
        <ArchivePostsTitle />

        <div className={styles.allSwipersForArchivePosts}>
          <Swiper
            slidesPerView={1.55}
            spaceBetween={0}
            className="mySwiper archivePostsSwiper"
          >
            {array1.map((item) => (
              <SwiperSlide
                key={item.id}
                onClick={() => navigate("/archivePage/archivePosts/archive")}
              >
                <div className={styles.archivePost}>
                  <div
                    className={styles.imgHeader}
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div>
                    <h3
                      className={`${
                        item.category == "news" ? styles.marginTop : ""
                      }`}
                    >
                      {item.name}
                    </h3>
                    {item.category != "news" && (
                      <>
                        <div className={styles.seasonAndEpisodeSection}>
                          <div>
                            <h4> S </h4>
                            <h5> {item.season} </h5>
                          </div>
                          <div>
                            <h4> E </h4>
                            <h5> {item.episode} </h5>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {array2.length !== 0 && (
            <Swiper
              slidesPerView={1.55}
              spaceBetween={0}
              className="mySwiper archivePostsSwiper"
            >
              {array2.map((item) => (
                <SwiperSlide
                  key={item.id}
                  onClick={() => navigate("/archivePage/archivePosts/archive")}
                >
                  <div className={styles.archivePost}>
                    <div
                      className={styles.imgHeader}
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                    <div>
                      <h3
                        className={`${
                          item.category == "news" ? styles.marginTop : ""
                        }`}
                      >
                        {item.name}
                      </h3>
                      {item.category != "news" && (
                        <>
                          <div className={styles.seasonAndEpisodeSection}>
                            <div>
                              <h4> S </h4>
                              <h5> {item.season} </h5>
                            </div>
                            <div>
                              <h4> E </h4>
                              <h5> {item.episode} </h5>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {array3.length !== 0 && (
            <Swiper
              slidesPerView={1.55}
              spaceBetween={0}
              className="mySwiper archivePostsSwiper"
            >
              {array3.map((item) => (
                <SwiperSlide
                  key={item.id}
                  onClick={() => navigate("/archivePage/archivePosts/archive")}
                >
                  <div className={styles.archivePost}>
                    <div
                      className={styles.imgHeader}
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                    <div>
                      <h3
                        className={`${
                          item.category == "news" ? styles.marginTop : ""
                        }`}
                      >
                        {item.name}
                      </h3>
                      {item.category != "news" && (
                        <>
                          <div className={styles.seasonAndEpisodeSection}>
                            <div>
                              <h4> S </h4>
                              <h5> {item.season} </h5>
                            </div>
                            <div>
                              <h4> E </h4>
                              <h5> {item.episode} </h5>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {array4.length !== 0 && (
            <Swiper
              slidesPerView={1.55}
              spaceBetween={0}
              className="mySwiper archivePostsSwiper"
            >
              {array4.map((item) => (
                <SwiperSlide
                  key={item.id}
                  onClick={() => navigate("/archivePage/archivePosts/archive")}
                >
                  <div className={styles.archivePost}>
                    <div
                      className={styles.imgHeader}
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                    <div>
                      <h3
                        className={`${
                          item.category == "news" ? styles.marginTop : ""
                        }`}
                      >
                        {item.name}
                      </h3>
                      {item.category != "news" && (
                        <>
                          <div className={styles.seasonAndEpisodeSection}>
                            <div>
                              <h4> S </h4>
                              <h5> {item.season} </h5>
                            </div>
                            <div>
                              <h4> E </h4>
                              <h5> {item.episode} </h5>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className={styles.pagesAccessSection}>
          <button // back button
            disabled={pageNumber + 1 == 1 && true}
            onClick={() =>
              dispatch({ type: "setPageNumber", value: pageNumber - 1 })
            }
            className={styles.leftBtn}
          >
            <svg // left icon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-6"
              className={styles.leftIcon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className={styles.pageNumberSection}>
            <h2> {pageNumber + 1} </h2>
            <h3> {totalNumberPages} </h3>
          </div>
          <button // next button
            disabled={pageNumber + 1 == totalNumberPages && true}
            onClick={() =>
              dispatch({ type: "setPageNumber", value: pageNumber + 1 })
            }
            className={styles.rightBtn}
          >
            <svg //right icon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-6"
              className={styles.rightIcon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
