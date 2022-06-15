import { useState } from "react";
import Image from "next/image";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../../styles/home/Gallery.module.scss";
import SlideBtn from "../modules/SlideBtn";
import Tags from "../modules/Tags";

const Gallery = ({ obj }) => {
    const [activeTag, setActiveTag] = useState("Все");
    const tags = Object.keys(obj);
    return (
        <section className={styles.gallery}>
            <div className="container">
                <h2 className={`${styles.title} stn-title`}>
                    Как это выглядит в деле
                </h2>
            </div>
            <Tags
                tags={tags}
                activeTag={activeTag}
                setActiveTag={setActiveTag}
            />
            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                className={`${styles.swiper} gallery__swiper`}
                grabCursor
                autoHeight
                breakpoints={{
                    1170: {
                        spaceBetween: 20,
                        centeredSlides: true,
                    },
                    0: {
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                }}
            >
                {obj[`${activeTag}`].map((item, index) => (
                    <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div className="slide-wrapper">
                            <div className={`${styles.slide}`}>
                                <Image src={item} layout="fill" alt="slide" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SlideBtn adaptive="desktop" type="next" />
            </Swiper>
        </section>
    );
};

export default Gallery;
