import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "../../styles/home/Gallery.module.scss";

const Gallery = ({ obj }) => {
    const [activeTag, setActiveTag] = useState("Все");
    return (
        <section className={styles.gallery}>
            <div className="container">
                <h2 className={`${styles.title} stn-title`}>
                    Как это выглядит в деле
                </h2>
            </div>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {Object.keys(obj).map((tag) => (
                        <li key={tag}>
                            <button
                                className={
                                    tag === activeTag
                                        ? `${styles.tag} ${styles.tagActive}`
                                        : `${styles.tag}`
                                }
                                onClick={() => setActiveTag(tag)}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Swiper
                slidesPerView="auto"
                className={`${styles.swiper}`}
                grabCursor
                autoHeight
                breakpoints={{
                    1170: {
                        spaceBetween: 50,
                        centeredSlides: true,
                    },
                    0: {
                        spaceBetween: 10,
                        centeredSlides: false,
                    },
                }}
            >
                {obj[`${activeTag}`].map((item, index) => (
                    <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div className={`${styles.slide}`}>
                            <Image src={item} layout="fill" alt="slide" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Gallery;
